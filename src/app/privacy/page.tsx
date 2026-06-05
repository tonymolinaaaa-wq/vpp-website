import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import { SiteHeader } from '@/components/SiteHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy | Valley Painting Pros',
  description:
    'How Valley Painting Pros collects, uses, and protects the information you share when you request a cabinet refinishing estimate — by phone, text, our website, or Facebook and Instagram lead forms.',
  alternates: {
    canonical: 'https://www.valleypaintingpros.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Valley Painting Pros',
    description:
      'How Valley Painting Pros collects, uses, and protects your information.',
    url: 'https://www.valleypaintingpros.com/privacy',
    type: 'website',
    locale: 'en_US',
  },
}

/*
 * NOTE: This privacy policy was drafted for Valley Painting Pros and is pending
 * owner/legal review before production use. It is not legal advice. Confirm the
 * SMS/TCPA consent language, data-sharing descriptions, and entity details with
 * counsel before relying on it.
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader trackingPage="privacy" />
      <main className="bg-cream">
        <section className="pb-16 pt-[112px] md:pb-24 md:pt-[136px]">
          <div className="mx-auto max-w-content px-6">
            <div className="mx-auto max-w-3xl">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-terra">
                Valley Painting Pros
              </p>
              <h1 className="mt-4 font-display text-[34px] leading-[1.12] text-ink md:text-[46px]">
                Privacy Policy
              </h1>
              <p className="mt-4 font-body text-sm text-mid">Last updated: June 4, 2026</p>

              <div className="mt-10 space-y-10">
                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Who we are
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    Valley Painting Pros, LLC (also referred to here as
                    {' '}&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides cabinet
                    refinishing services to homeowners across the East Valley of Arizona, including
                    Chandler, Gilbert, Mesa, Queen Creek, Scottsdale, and Tempe (AZ ROC #363664).
                    This Privacy Policy explains what information we collect when you contact us or
                    request an estimate, how we use it, and the choices you have.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Information we collect
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    <span className="font-semibold text-ink">Information you provide.</span> When you
                    request an estimate, call or text us, or submit a form — including a lead or
                    contact form on our website or through our advertisements on Facebook or
                    Instagram — we collect the information you choose to share. This may include your
                    name, phone number, email address, home or project address, and details about
                    your kitchen or cabinet project.
                  </p>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    <span className="font-semibold text-ink">Information from advertising platforms.</span>{' '}
                    When you submit a lead form through our ads on Facebook or Instagram, those
                    platforms (operated by Meta) provide us with the information you entered, such as
                    your name, contact details, and form responses, in accordance with their terms
                    and your settings.
                  </p>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    <span className="font-semibold text-ink">Information collected automatically.</span>{' '}
                    When you visit our website, we and our analytics and advertising providers may
                    automatically collect limited technical information such as your IP address,
                    device and browser type, pages viewed, and how you reached our site. We collect
                    this through cookies and similar technologies, described below.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    How we use your information
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    We use the information we collect to:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 font-body text-base leading-7 text-brown">
                    <li>respond to your inquiry and provide a cabinet refinishing estimate;</li>
                    <li>schedule, perform, and follow up on services you request;</li>
                    <li>communicate with you by phone, text, or email about your project, appointment, or estimate;</li>
                    <li>send service updates such as appointment reminders and project photos;</li>
                    <li>operate, measure, and improve our website and advertising; and</li>
                    <li>comply with our legal obligations and protect our rights.</li>
                  </ul>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    We do not sell your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Calls and text messages (SMS)
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    When you provide your phone number — through our website, by calling or texting
                    us, or through a Facebook or Instagram lead form — you agree that Valley Painting
                    Pros may contact you by phone call and text message about your inquiry, estimate,
                    and project. Message frequency varies. Message and data rates may apply. You can
                    opt out of text messages at any time by replying STOP, or reply HELP for help.
                    Consenting to calls or texts is not a condition of purchasing any goods or
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    How we share information
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    We share personal information only as needed to run our business and as described
                    here:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 font-body text-base leading-7 text-brown">
                    <li>
                      <span className="font-semibold text-ink">Service providers</span> — vendors who
                      help us operate, such as scheduling, communications, and website or marketing
                      providers, who may use the information only to perform services for us.
                    </li>
                    <li>
                      <span className="font-semibold text-ink">Advertising and analytics platforms</span>{' '}
                      — providers such as Meta and Google, to measure and improve our advertising,
                      consistent with this Policy and their terms.
                    </li>
                    <li>
                      <span className="font-semibold text-ink">Legal and safety</span> — when required
                      by law, or to protect the rights, property, or safety of our customers, our
                      company, or others.
                    </li>
                  </ul>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    We do not sell your personal information, and we do not share it for unrelated
                    third-party marketing.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Cookies, analytics, and advertising
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    Our website uses cookies and similar technologies to keep the site working,
                    understand how visitors use it, and measure the performance of our advertising.
                    We may use analytics tools (such as Google Analytics) and advertising tools (such
                    as the Meta pixel) that set cookies or collect device identifiers. You can control
                    or disable cookies through your browser settings, and you can adjust ad
                    personalization through the settings offered by Google and Meta. Disabling some
                    cookies may affect how the site functions.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Your choices and rights
                  </h2>
                  <ul className="mt-4 list-disc space-y-2 pl-6 font-body text-base leading-7 text-brown">
                    <li>Opt out of text messages by replying STOP, or unsubscribe from emails using the link provided.</li>
                    <li>Ask us to access, correct, or delete the personal information we hold about you.</li>
                    <li>Ask questions about how your information is used.</li>
                  </ul>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    To make a request, contact us using the details below. We will respond consistent
                    with applicable law.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Data retention
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    We keep personal information for as long as needed to provide our services,
                    respond to your inquiry, maintain our business records, and meet legal
                    requirements. When it is no longer needed, we take reasonable steps to delete or
                    de-identify it.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Children&rsquo;s privacy
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    Our services and website are intended for adults. We do not knowingly collect
                    personal information from children under 13. If you believe a child has provided
                    us information, please contact us and we will delete it.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Third-party links
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    Our website and ads may link to sites we do not operate, including Facebook and
                    Instagram. We are not responsible for the privacy practices of those sites. Please
                    review their policies.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Changes to this policy
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    We may update this Privacy Policy from time to time. When we do, we will revise
                    the date at the top of this page. Your continued use of our website or services
                    after an update means you accept the revised Policy.
                  </p>
                </section>

                <section className="rounded-xl border border-rule bg-sand p-6 md:p-8">
                  <h2 className="font-display text-[22px] leading-tight text-ink md:text-[26px]">
                    Contact us
                  </h2>
                  <p className="mt-4 font-body text-base leading-7 text-brown">
                    Valley Painting Pros, LLC — AZ ROC #363664
                    <br />
                    Chandler, Gilbert, Mesa, Queen Creek, Scottsdale &amp; Tempe, Arizona
                  </p>
                  <p className="mt-3 font-body text-base leading-7 text-brown">
                    Phone &amp; text:{' '}
                    <a href="tel:+14804332680" className="font-semibold text-terra underline underline-offset-2 hover:text-terra-dark">
                      (480) 433-2680
                    </a>
                    <br />
                    Email:{' '}
                    <a href="mailto:valleypaintingprosllc@gmail.com" className="font-semibold text-terra underline underline-offset-2 hover:text-terra-dark">
                      valleypaintingprosllc@gmail.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
