#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const allowlistedExactPaths = new Set([
  'README.md',
  'AGENTS.md',
  'CLAUDE.md',
  'AI-STATE.md',
]);

const allowlistedPrefixes = [
  'docs/',
  '.github/',
];

function normalizePath(filePath) {
  return filePath.trim().replaceAll('\\', '/');
}

function isAllowlisted(filePath) {
  return (
    allowlistedExactPaths.has(filePath) ||
    allowlistedPrefixes.some((prefix) => filePath.startsWith(prefix))
  );
}

function readStagedFiles() {
  const output = execFileSync(
    'git',
    ['diff', '--cached', '--name-only', '--diff-filter=ACMRTD'],
    { encoding: 'utf8' },
  );

  return output.split(/\r?\n/);
}

function readFilesFrom(filePath) {
  return readFileSync(filePath, 'utf8').split(/\r?\n/);
}

function parseArgs(args) {
  if (args.includes('--staged')) {
    return { mode: 'staged' };
  }

  const filesFromIndex = args.indexOf('--files-from');
  if (filesFromIndex !== -1 && args[filesFromIndex + 1]) {
    return { mode: 'files-from', filePath: args[filesFromIndex + 1] };
  }

  return { mode: 'help' };
}

function getFiles(args) {
  const parsed = parseArgs(args);

  if (parsed.mode === 'staged') {
    return readStagedFiles();
  }

  if (parsed.mode === 'files-from') {
    return readFilesFrom(parsed.filePath);
  }

  console.error('Usage: node scripts/check-ai-state-required.mjs --staged');
  console.error('   or: node scripts/check-ai-state-required.mjs --files-from <path>');
  process.exit(2);
}

const changedFiles = getFiles(process.argv.slice(2))
  .map(normalizePath)
  .filter(Boolean);

const changedFileSet = new Set(changedFiles);
const meaningfulFiles = changedFiles.filter((filePath) => !isAllowlisted(filePath));
const aiStateChanged = changedFileSet.has('AI-STATE.md');

if (meaningfulFiles.length > 0 && !aiStateChanged) {
  console.error('');
  console.error('AI-STATE.md update required.');
  console.error('');
  console.error('This change touches non-allowlisted repo files, but AI-STATE.md is not included.');
  console.error('Update AI-STATE.md with the current execution state and stage it with this change.');
  console.error('');
  console.error('Non-allowlisted files:');
  meaningfulFiles.forEach((filePath) => console.error(`- ${filePath}`));
  console.error('');
  console.error('Allowlisted paths that do not require AI-STATE.md by themselves:');
  console.error('- README.md');
  console.error('- docs/**');
  console.error('- AGENTS.md');
  console.error('- CLAUDE.md');
  console.error('- AI-STATE.md');
  console.error('- .github/**');
  console.error('');
  console.error('Rule enforced by: scripts/check-ai-state-required.mjs (same script runs in CI)');
  console.error('');
  console.error('Use git commit --no-verify only with Ricardo-approved override.');
  process.exit(1);
}

console.log('AI-STATE.md check passed.');
