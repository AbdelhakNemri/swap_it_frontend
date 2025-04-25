import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#030303] text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Swap</h3>
            <p className="text-[#F1EFEC]/80 mb-4">Empowering communities through peer-to-peer skill sharing.</p>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/browse-skills" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Browse Skills
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="text-[#F1EFEC]/80 hover:text-white transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F1EFEC]/20 mt-8 pt-8 text-center text-[#F1EFEC]/60">
          <p>&copy; {new Date().getFullYear()} Swap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
