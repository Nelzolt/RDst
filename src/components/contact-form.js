"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Textarea } from "../components/ui/textarea"

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      practiceArea: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  return (
    <Card className="border-primary/20">
      {!formSubmitted ? (
        <>
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="practice-area">Practice Area</Label>
                <Select onValueChange={handleSelectChange} value={formData.practiceArea} required>
                  <SelectTrigger id="practice-area">
                    <SelectValue placeholder="Select a practice area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family-law">Family Law</SelectItem>
                    <SelectItem value="criminal-defense">Criminal Defense</SelectItem>
                    <SelectItem value="personal-injury">Personal Injury</SelectItem>
                    <SelectItem value="business-law">Business Law</SelectItem>
                    <SelectItem value="estate-planning">Estate Planning</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your legal matter..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Submit
              </Button>
            </form>
          </CardContent>
        </>
      ) : (
        <CardContent className="p-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your message has been received. One of our attorneys will contact you shortly to discuss your legal matter.
          </p>
          <Button
            onClick={() => setFormSubmitted(false)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
          >
            Send Another Message
          </Button>
        </CardContent>
      )}
    </Card>
  )
}

