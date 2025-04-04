import { Link } from "react-router-dom"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

// import { button } from "./ui/button"
// import { Input } from "./ui/input"
// import { Separator } from "./ui/separator"

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="mb-4 flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary">RD STEWART</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">LAW FIRM</span>
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Providing exceptional legal services with integrity and dedication since 1995.
            </p>
            <div className="flex space-x-4">
              <button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </button>
              <button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </button>
              <button variant="ghost" size="icon" className="text-gray-300 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </button>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>175 Varick St, New York, NY 10014</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>(917) 985-6370</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-primary" />
                <span>legal@rdstewartlawfirm.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/practice-areas" className="hover:text-primary">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-primary">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-300">Subscribe to our newsletter for legal updates and insights.</p>
            {/* <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</button>
            </form> */}
          </div>
        </div>

        {/* <Separator className="my-8 bg-gray-800" /> */}

        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} RD Stewart Law Firm. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

