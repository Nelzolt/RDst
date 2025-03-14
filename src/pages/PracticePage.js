import React from "react";
import Cta from "../components/Cta";

const PracticePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="coverer mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl play font-bold mb-6 play">
              Practice Areas At RD Stewart Law Firm
            </h1>
            <p className="text-xl mb-8">
              Our experienced attorneys are dedicated to offering personalized
              solutions tailored to your unique situation.
            </p>
          </div>
        </div>
      </section>
      {/* Practice Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="coverer mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl play font-bold mb-4">
              Our Practice Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive legal services across a wide range of
              practice areas to meet your needs.
            </p>
          </div>
        </div>

        <section className="py-8 md:py-12">
          <div className="coverer mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-[50%]">
                <h2 className="text-xl md:text-3xl play font-bold mb-4">
                  Family Law
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Navigating family legal matters can be emotionally
                  challenging, but our compassionate attorneys are here to
                  provide guidance and support. We handle cases involving:
                </p>
                <ul className="text-sm md:text-base text-muted-foreground">
                  <li>- Divorce and legal separation </li>
                  <li>- Child custody and visitation rights </li>
                  <li>- Child and spousal support </li>
                  <li>- Adoption and guardianship </li>
                  <li>- Prenuptial and postnuptial agreements</li>
                </ul>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  Our goal is to protect your interests while striving for
                  amicable resolutions whenever possible.{" "}
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img
                  src="/e1.JPG"
                  alt="Thomas J. Valentino"
                  className="rounded-lg shadow-lg w-full object-cover h-[350px] md:h-[450px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="coverer mx-auto px-4">
            <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
              <div className="w-full md:w-[50%] relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img
                  src="/e2.JPG"
                  alt="Thomas J. Valentino"
                  className="rounded-lg shadow-lg w-full object-cover h-[350px] md:h-[450px]"
                />
              </div>
              <div className="w-full md:w-[50%]">
                <h2 className="text-xl md:text-3xl play font-bold mb-4">
                  Criminal Defense
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  If you are facing criminal charges, you need a strong defense
                  team to protect your rights. Our criminal defense attorneys
                  have experience handling a variety of cases, including:
                </p>
                <ul className="text-sm md:text-base text-muted-foreground">
                  <li>- DUI and traffic offenses </li>
                  <li>- Drug crimes </li>
                  <li>- Assault and violent crimes </li>
                  <li>- Theft and property crimes </li>
                  <li>- White-collar crimes </li>
                </ul>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  We will work tirelessly to build a solid defense strategy and
                  advocate for the best possible outcome in your case.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="coverer mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-[50%]">
                <h2 className="text-xl md:text-3xl play font-bold mb-4">
                  Personal Injury
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  If you’ve been injured due to someone else’s negligence, you
                  deserve compensation for your losses. We represent clients in
                  cases involving:
                </p>
                <ul className="text-sm md:text-base text-muted-foreground">
                  <li>- Car, truck, and motorcycle accidents </li>
                  <li>- Slip and fall injuries </li>
                  <li>- Medical malpractice </li>
                  <li>- Wrongful death claims</li>
                  <li>- Workplace injuries</li>
                </ul>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  {" "}
                  We fight to secure fair settlements and, if necessary, are
                  prepared to take your case to court.
                </p>
              </div>
              <div className="relative w-full md:w-[50%]">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img
                  src="/e3.JPG"
                  alt="Thomas J. Valentino"
                  className="rounded-lg shadow-lg w-full object-cover h-[350px] md:h-[450px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="coverer mx-auto px-4">
            <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
              <div className="w-full md:w-[50%] relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img
                  src="/e4.JPG"
                  alt=""
                  className="rounded-lg shadow-lg w-full object-cover h-[350px] md:h-[450px]"
                />
              </div>
              <div className="w-full md:w-[50%]">
                <h2 className="text-xl md:text-3xl play font-bold mb-4">
                  Business Law
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Whether you're launching a startup or managing an established
                  business, our legal team provides strategic counsel to help
                  your company succeed. Our business law services include:
                </p>
                <ul className="text-sm md:text-base text-muted-foreground">
                  <li>- Business formation and structuring </li>
                  <li>- Contract drafting and negotiation </li>
                  <li>- Employment law compliance </li>
                  <li>- Business litigation and dispute resolution </li>
                  <li>- Mergers, acquisitions, and partnerships </li>
                  <li>- White-collar crimes </li>
                </ul>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  We help businesses navigate legal complexities while
                  minimizing risks and ensuring compliance with all applicable
                  laws.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="coverer mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-[50%]">
                <h2 className="text-xl md:text-3xl play font-bold mb-4">
                  {" "}
                  Estate Planning
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Planning for the future is essential to protect your assets
                  and ensure your wishes are carried out. Our estate planning
                  attorneys offer:
                </p>
                <ul className="text-sm md:text-base text-muted-foreground">
                  <li>- Wills and trusts </li>
                  <li>- Power of attorney and healthcare directives </li>
                  <li>- Probate and estate administration </li>
                  <li>- Asset protection strategies </li>
                  <li>- Elder law and Medicaid planning</li>
                </ul>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  We work with you to create a customized plan that provides
                  security for you and your loved ones.
                </p>
              </div>
              <div className="relative w-full md:w-[50%]">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
                <img
                  src="/e5.JPG"
                  alt=""
                  className="rounded-lg shadow-lg w-full object-cover h-[350px] md:h-[450px]"
                />
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </section>
    </div>
  );
};

export default PracticePage;
