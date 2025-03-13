import { ArrowRight } from "lucide-react"

import { Button } from "../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { Link } from "react-router-dom"

export const metadata = {
  title: "Frequently Asked Questions | RD Stewart Law Firm",
  description: "Find answers to common legal questions and learn more about our services.",
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 play">Frequently Asked Questions</h1>

          <p className="text-base md:text-xl mb-8">
          Find answers to common legal questions. If you don't see what you're looking for, please contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Family Law",
                description: "Questions about divorce, custody, and family matters",
                link: "#family-law",
              },
              {
                title: "Criminal Defense",
                description: "Questions about criminal charges and legal defense",
                link: "#criminal-defense",
              },
              {
                title: "Business Law",
                description: "Questions about business formation and legal issues",
                link: "#business-law",
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h2 className="text-base md:text-xl  font-bold mb-2 play">{category.title}</h2>
                <p className=" text-sm md:text-base text-muted-foreground mb-4">{category.description}</p>
                <a
                  href={category.link}
                  className="text-primary text-sm md:text-base font-medium inline-flex items-center hover:underline"
                >
                  View Questions <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Family Law FAQs */}
          <div id="family-law" className="mb-16 scroll-mt-24">
            <h2 className="text-lg  md:text-3xl play font-bold mb-8 flex items-center">
              <div className="h-1 w-12 bg-primary mr-4"></div>
              Family Law
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How is child custody determined in New York?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    In New York, child custody decisions are made based on the "best interests of the child" standard.
                    The court considers various factors, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Each parent's ability to provide for the child's needs</li>
                    <li>The child's relationship with each parent and siblings</li>
                    <li>Each parent's home environment</li>
                    <li>Each parent's physical and mental health</li>
                    <li>Any history of domestic violence</li>
                    <li>The child's preference (if they're of sufficient age and maturity)</li>
                  </ul>
                  <p>
                    New York courts generally favor arrangements that allow children to maintain relationships with both
                    parents, unless there are concerns about a parent's fitness.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a divorce take in New York?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    The duration of a divorce in New York varies depending on whether it's contested or uncontested:
                  </p>
                  <p className="mb-4">
                    <strong>Uncontested divorce:</strong> When both parties agree on all issues (division of assets,
                    child custody, support, etc.), the process can take as little as 3-6 months.
                  </p>
                  <p className="mb-4">
                    <strong>Contested divorce:</strong> When spouses disagree on one or more issues, the process can
                    take 9 months to 2+ years, depending on the complexity of the case and court backlog.
                  </p>
                  <p>
                    New York has a mandatory waiting period of at least 6 months from the date of filing before a
                    divorce can be finalized. Working with an experienced attorney can help streamline the process and
                    avoid unnecessary delays.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How is child support calculated in New York?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    New York uses the Child Support Standards Act (CSSA) to calculate child support. The basic
                    calculation is based on a percentage of the parents' combined income, with the percentage increasing
                    with the number of children:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>17% for one child</li>
                    <li>25% for two children</li>
                    <li>29% for three children</li>
                    <li>31% for four children</li>
                    <li>At least 35% for five or more children</li>
                  </ul>
                  <p>
                    Additional factors may be considered, including healthcare costs, childcare expenses, educational
                    costs, and the financial resources of each parent. The court may deviate from the guidelines if it
                    determines that the calculated amount is unjust or inappropriate.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Criminal Defense FAQs */}
          <div id="criminal-defense" className="mb-16 scroll-mt-24">
            <h2 className="text-lg  md:text-3xl play font-bold mb-8 flex items-center">
              <div className="h-1 w-12 bg-primary mr-4"></div>
              Criminal Defense
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What should I do if I'm arrested?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">If you're arrested, it's important to remember these key steps:</p>
                  <ol className="list-decimal pl-6 space-y-2 mb-4">
                    <li>
                      <strong>Remain calm and polite</strong> - Being confrontational can make the situation worse.
                    </li>
                    <li>
                      <strong>Exercise your right to remain silent</strong> - You are not required to answer questions
                      beyond identifying information.
                    </li>
                    <li>
                      <strong>Request an attorney immediately</strong> - Say clearly: "I want to speak with an
                      attorney."
                    </li>
                    <li>
                      <strong>Do not consent to searches</strong> - Unless police have a warrant, you can refuse
                      searches.
                    </li>
                    <li>
                      <strong>Do not discuss your case</strong> - Avoid discussing details with cellmates or on phone
                      calls from jail.
                    </li>
                  </ol>
                  <p>
                    Remember that anything you say can be used against you in court. It's best to wait until you have
                    legal representation before answering questions about your case.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What's the difference between a felony and a misdemeanor?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    In New York, criminal offenses are primarily categorized as either felonies or misdemeanors:
                  </p>
                  <p className="mb-4">
                    <strong>Misdemeanors:</strong> Less serious offenses punishable by up to 1 year in jail. They're
                    further divided into:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Class A: Up to 1 year in jail</li>
                    <li>Class B: Up to 3 months in jail</li>
                    <li>Unclassified: Penalties vary by specific offense</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Felonies:</strong> More serious offenses punishable by more than 1 year in prison. They're
                    divided into:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Class A: Most serious (includes murder), punishable by life imprisonment</li>
                    <li>Class B: Up to 25 years in prison</li>
                    <li>Class C: Up to 15 years in prison</li>
                    <li>Class D: Up to 7 years in prison</li>
                    <li>Class E: Up to 4 years in prison</li>
                  </ul>
                  <p>
                    Felony convictions also result in the loss of certain civil rights, such as the right to vote (while
                    incarcerated), serve on a jury, or possess firearms.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can a criminal record be expunged in New York?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    New York does not have a true "expungement" process that completely erases criminal records.
                    However, there are several options for clearing or sealing records:
                  </p>
                  <p className="mb-4">
                    <strong>Record Sealing:</strong> Under NY Criminal Procedure Law § 160.59, eligible individuals can
                    apply to have certain convictions sealed after a 10-year waiting period. When sealed, the records
                    are hidden from most employers and the public, though they remain accessible to law enforcement and
                    certain agencies.
                  </p>
                  <p className="mb-4">
                    <strong>Eligible offenses include:</strong> Most non-violent felonies and misdemeanors. You can seal
                    up to 2 convictions (only 1 can be a felony).
                  </p>
                  <p className="mb-4">
                    <strong>Ineligible offenses include:</strong> Sex offenses, violent felonies, and certain serious
                    felonies.
                  </p>
                  <p>
                    Additionally, marijuana conviction records are now automatically expunged under the Marijuana
                    Regulation and Taxation Act of 2021. For other options and to determine your eligibility, it's best
                    to consult with an attorney who specializes in criminal record sealing.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Business Law FAQs */}
          <div id="business-law" className="mb-16 scroll-mt-24">
            <h2 className="text-lg  md:text-3xl play font-bold mb-8 flex items-center">
              <div className="h-1 w-12 bg-primary mr-4"></div>
              Business Law
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What type of business entity should I form?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    The best business entity for your venture depends on several factors, including liability
                    protection, tax considerations, management structure, and growth plans. Here's a brief overview of
                    common options:
                  </p>
                  <p className="mb-4">
                    <strong>Sole Proprietorship:</strong> Simplest form with no separation between owner and business.
                    Offers no liability protection but minimal paperwork.
                  </p>
                  <p className="mb-4">
                    <strong>Limited Liability Company (LLC):</strong> Popular choice that provides liability protection
                    while maintaining tax flexibility. Good for small to medium businesses.
                  </p>
                  <p className="mb-4">
                    <strong>S Corporation:</strong> Offers liability protection and potential tax advantages through
                    income splitting. Limited to 100 shareholders and one class of stock.
                  </p>
                  <p className="mb-4">
                    <strong>C Corporation:</strong> Provides strongest liability protection and is best for businesses
                    seeking outside investment or planning to go public. Subject to double taxation.
                  </p>
                  <p className="mb-4">
                    <strong>Partnership:</strong> Multiple variations (general, limited, LLP) for businesses with
                    multiple owners. Liability protection varies by type.
                  </p>
                  <p>
                    We recommend consulting with both a business attorney and tax professional before making this
                    important decision, as it will have long-term implications for your business.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What contracts does my business need?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Every business should have several essential contracts to protect its interests. The specific
                    contracts you need depend on your business type, but common ones include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>
                      <strong>Business Formation Documents:</strong> Articles of incorporation, operating agreements,
                      partnership agreements, or bylaws
                    </li>
                    <li>
                      <strong>Client/Customer Agreements:</strong> Terms of service, sales contracts, service agreements
                    </li>
                    <li>
                      <strong>Employment Documents:</strong> Employment contracts, confidentiality agreements,
                      non-compete agreements
                    </li>
                    <li>
                      <strong>Vendor Agreements:</strong> Supplier contracts, service provider agreements
                    </li>
                    <li>
                      <strong>Commercial Lease:</strong> If you're renting business space
                    </li>
                    <li>
                      <strong>Intellectual Property Agreements:</strong> Licensing agreements, assignments,
                      work-for-hire agreements
                    </li>
                    <li>
                      <strong>Privacy Policy and Terms of Use:</strong> For websites and apps
                    </li>
                  </ul>
                  <p>
                    Having properly drafted contracts can prevent disputes, protect your business assets, and provide
                    clear guidelines for business relationships. We recommend having an attorney review all contracts
                    before signing.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I protect my business's intellectual property?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Protecting your intellectual property (IP) is crucial for maintaining your competitive advantage.
                    Here are the main types of IP protection:
                  </p>
                  <p className="mb-4">
                    <strong>Trademarks:</strong> Protect your business name, logo, slogans, and other brand identifiers.
                    Registration with the USPTO provides nationwide protection.
                  </p>
                  <p className="mb-4">
                    <strong>Copyrights:</strong> Protect original creative works such as content, software, designs, and
                    artistic works. Copyright exists automatically upon creation, but registration provides additional
                    benefits.
                  </p>
                  <p className="mb-4">
                    <strong>Patents:</strong> Protect inventions, processes, and designs. Patents require a detailed
                    application process and provide exclusive rights for a limited period.
                  </p>
                  <p className="mb-4">
                    <strong>Trade Secrets:</strong> Protect valuable confidential information through non-disclosure
                    agreements, confidentiality policies, and security measures.
                  </p>
                  <p className="mb-4">Additional protective measures include:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Using proper contracts with employees and contractors</li>
                    <li>Implementing confidentiality agreements</li>
                    <li>Monitoring for infringement</li>
                    <li>Maintaining proper documentation of IP creation</li>
                  </ul>
                  <p>
                    An IP attorney can help develop a comprehensive strategy tailored to your specific business needs
                    and budget.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to provide the answers and legal guidance you need.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

