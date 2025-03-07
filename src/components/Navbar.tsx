import { Link } from "react-router-dom"
import DesktopNavbar from "./DesktopNavbar"

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full border-b bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary font-mono tracking-wider">
              <img src="/images/logo.png" alt="logo" className="md:w-24 w-16" />
            </Link>
          </div>

          <DesktopNavbar />
          {/* <MobileNavbar /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
