import { Award, BookOpen, Users, Briefcase } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Link } from "react-router-dom"

export const metadata = {
  title: "About Us | RD Stewart Law Firm",
  description: "Learn about our experienced legal team and our commitment to providing exceptional legal services.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 play">About RD Stewart Law Firm</h1>
            <p className="text-xl mb-8">
              A trusted legal partner committed to excellence and client success since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 play">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Founded in 1995 by Richard D. Stewart, our firm has grown from a small practice to one of New York's
                  most respected law firms. Today, under the leadership of Thomas J. Valentino, we continue our
                  tradition of excellence and client-focused representation.
                </p>
                <p>
                  Our mission is simple: to provide exceptional legal representation with integrity, compassion, and
                  dedication. We believe in building lasting relationships with our clients based on trust and results.
                </p>
                <p>
                  With decades of combined experience, our team of attorneys brings depth and breadth of knowledge
                  across multiple practice areas, allowing us to handle even the most complex legal matters with
                  confidence and skill.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 -z-10"></div>
              <img
                src="/office.jpg?height=600&width=800"
                alt="RD Stewart Law Firm Office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 play">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at RD Stewart Law Firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                icon: <Award className="h-10 w-10 text-primary" />,
                description:
                  "We strive for excellence in every aspect of our practice, from legal strategy to client service.",
              },
              {
                title: "Integrity",
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                description: "We adhere to the highest ethical standards and always act with honesty and transparency.",
              },
              {
                title: "Compassion",
                icon: <Users className="h-10 w-10 text-primary" />,
                description:
                  "We understand the challenges our clients face and approach each case with empathy and understanding.",
              },
              {
                title: "Results",
                icon: <Briefcase className="h-10 w-10 text-primary" />,
                description:
                  "We are committed to achieving the best possible outcomes for our clients through strategic advocacy.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 play">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 play">Meet Our Legal Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced attorneys are dedicated to providing exceptional legal representation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Thomas J. Valentino",
                title: "Managing Partner",
                image: "/thomas.jpg?height=400&width=400",
                bio: "With over 20 years of experience, Thomas leads our firm with expertise in business law and litigation.",
              },
              {
                name: "Sarah M. Johnson",
                title: "Senior Attorney",
                image: "/p2.jpg?height=400&width=400",
                bio: "Sarah specializes in family law and has successfully represented clients in complex divorce and custody cases.",
              },
              {
                name: "Michael R. Chen",
                title: "Attorney",
                image: "/p3.jpg?height=400&width=400",
                bio: "Michael focuses on criminal defense and has a proven track record of achieving favorable outcomes for his clients.",
              },
              {
                name: "Casto L. Rodriguez",
                title: "Attorney",
                image: "/p4.jpg?height=400&width=400",
                bio: "Jennifer's practice centers on estate planning and probate matters, helping clients secure their legacy.",
              },
              {
                name: "David A. Williams",
                title: "Attorney",
                image: "/p1.jpg?height=400&width=400",
                bio: "David specializes in personal injury law and is dedicated to helping clients receive fair compensation.",
              },
            
            ].map((attorney, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={attorney.image || "/placeholder.svg"}
                    alt={attorney.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 play">{attorney.name}</h3>
                  <p className="text-primary font-medium mb-3">{attorney.title}</p>
                  <p className="text-muted-foreground">{attorney.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 play">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is ready to provide the expert legal guidance you deserve.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

