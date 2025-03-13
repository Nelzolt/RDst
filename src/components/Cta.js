import { CheckCircle } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <div> <section className="py-16 bg-black text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Schedule Your Free Consultation</h2>
          <p className="text-lg mb-6">
            Take the first step toward resolving your legal matter. Contact us today to schedule a free consultation
            with one of our experienced attorneys.
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <p>Personalized legal strategies tailored to your needs</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <p>Transparent communication throughout your case</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-primary mr-2 mt-0.5" />
              <p>Dedicated attorneys fighting for your best interests</p>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Cta