import { TrustSignalCards } from '@/components/TrustSignalCards'

export function BlogTrustSignals({ dark = false }: { dark?: boolean }) {
  return <TrustSignalCards compact={dark} />
}
