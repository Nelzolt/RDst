import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Scale, Shield, Award, Clock } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/hammer.jpg?height=1200&width=2000')",
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 play">
                Expert Legal Representation You Can Trust
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Thomas J. Valentino and the team at RD Stewart Law Firm provide exceptional legal services with
                integrity and dedication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  <Link to="/practice-areas">Our Practice Areas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center play">Our Practice Areas</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive legal services across a wide range of practice areas to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Family Law",
                icon: <Scale className="h-7 w-7 md:h-9 md:w-9 text-primary" />,
                description: "Divorce, child custody, support, and other family matters.",
                link: "/practice-areas",
              },
              {
                title: "Criminal Defense",
                icon: <Shield className="h-7 w-7 md:h-9 md:w-9 text-primary" />,
                description: "Protecting your rights in criminal proceedings.",
                link: "/practice-areas",
              },
              {
                title: "Personal Injury",
                icon: <Award className="h-7 w-7 md:h-9 md:w-9 text-primary" />,
                description: "Seeking compensation for injuries caused by negligence.",
                link: "/practice-areas",
              },
              {
                title: "Business Law",
                icon: <CheckCircle className="h-7 w-7 md:h-9 md:w-9 text-primary" />,
                description: "Legal guidance for businesses of all sizes.",
                link: "/practice-areas",
              },
              {
                title: "Estate Planning",
                icon: <Clock className="h-7 w-7 md:h-9 md:w-9 text-primary" />,
                description: "Wills, trusts, and comprehensive estate planning.",
                link: "/practice-areas/estate-planning",
              },
              {
                title: "View All Services",
                icon: <ArrowRight className="h-7 w-7 md:h-9 md:w-9 text-primary" />,
                description: "Explore our full range of legal services.",
                link: "/practice-areas",
                isViewAll: true,
              },
            ].map((area, index) => (
              <Card
                key={index}
                className={`border-none shadow-md transition-all duration-300 hover:shadow-lg ${area.isViewAll ? "bg-primary/5" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{area.icon}</div>
                  <h3 className="text-base md:text-xl font-medium mb-2 play">{area.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{area.description}</p>
                  <Link to={area.link} className="text-sm md:text-base text-primary font-medium inline-flex items-center hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-4 text-center play">About Thomas J. Valentino</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                With over 20 years of experience, Thomas J. Valentino has established himself as a respected attorney in
                New York, known for his dedication to clients and exceptional results.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At RD Stewart Law Firm, we believe in providing personalized legal services tailored to each client's
                unique situation. Our team of experienced attorneys is committed to achieving the best possible outcomes
                for our clients.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-1 w-12 bg-primary"></div>
                <p className="text-lg font-medium">Committed to Excellence</p>
              </div>
              <Button asChild className="text-sm md:text-base bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
              <img
                src="/thomas.jpg"
                alt="Thomas J. Valentino"
                className="rounded-lg shadow-lg w-full object-contain h-[350px] md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-8 text-center play">What Our Clients Say</h2>
            <p className=" text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We take pride in the positive feedback we receive from our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                quote:
                  "Thomas and his team provided exceptional guidance during my divorce. They were compassionate, professional, and achieved a favorable outcome for me.",
                image: "/testimonial1.jpg?height=100&width=100",
              },
              {
                name: "Michael Rodriguez",
                quote:
                  "I was facing serious criminal charges and RD Stewart Law Firm fought tirelessly for my rights. Their expertise made all the difference in my case.",
                image: "/testimonial2.jpg?height=100&width=100",
              },
              {
                name: "Tommy Williams",
                quote:
                  "The estate planning services I received were comprehensive and tailored to my specific needs. I now have peace of mind knowing my affairs are in order.",
                image: "/testimonial3.jpg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 relative">
                      <div className="absolute inset-0 rounded-full bg-primary/10 transform scale-150"></div>
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full relative z-10"
                      />
                    </div>
                    <p className=" text-sm md:text-base italic mb-4 text-muted-foreground">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-10">
            <Button asChild variant="outline" className="text-sm md:text-base border-primary text-primary hover:bg-primary/5">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-8 text-center play">Schedule Your Free Consultation</h2>
              <p className="text-base md:text-lg mb-6">
                Take the first step toward resolving your legal matter. Contact us today to schedule a free consultation
                with one of our experienced attorneys.
              </p>
              <div className="flex text-sm md:text-base flex-col space-y-4">
                <div className="flex items-start ">
                  <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-primary mr-2 mt-0.5" />
                  <p>Personalized legal strategies tailored to your needs</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-primary mr-2 mt-0.5" />
                  <p>Transparent communication throughout your case</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-4 w-4 md:h-6 md:w-6 text-primary mr-2 mt-0.5" />
                  <p>Dedicated attorneys fighting for your best interests</p>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-center play">Latest Legal Insights</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest articles and legal updates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Child Custody Laws in New York",
                excerpt:
                  "An overview of how New York courts determine child custody and what factors they consider most important.",
                date: "March 8, 2025",
                image: "/blog3.JPG",
                category: "Family Law",
              },
              {
                title: "5 Essential Elements of a Solid Business Contract",
                excerpt:
                  "Learn the key components that should be included in every business contract to protect your interests.",
                date: "February 22, 2025",
                image: "/blog2.JPG",
                category: "Business Law",
              },
              {
                title: "Recent Changes to Estate Tax Laws and How They Affect You",
                excerpt:
                  "Important updates to estate tax legislation and strategies to optimize your estate planning in light of these changes.",
                date: "February 10, 2025",
                image: "/blog1.JPG",
                category: "Estate Planning",
              },
            ].map((post, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
               <div className="relative h-48 overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} fill  className="h-auto w-full object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded">
                    {post.category}
                  </div>
                </div>
              
                <CardContent className="p-6">
              
               
                  <p className="text-xs mdtext-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-base md:text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{post.excerpt}</p>
                  {/* <Link href="/blog" className="text-primary font-medium text-sm md:text-base inline-flex items-center hover:underline">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-primary text-sm md:text-base text-primary hover:bg-primary/5">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default HomePage

