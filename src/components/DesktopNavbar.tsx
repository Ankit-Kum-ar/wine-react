import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
        <NavLink 
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2 hover:text-white" 
            }
        >
            <span className="hidden lg:inline">Home</span>
        </NavLink>
        <Link
            to="about-section"
            spy={true}
            smooth={true}
            duration={500}
            className="text-slate-400 cursor-pointer flex items-center gap-2 hover:text-white"
        >
            <span className="hidden lg:inline">About</span>
        </Link>
        <NavLink
            to="/product"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2 hover:text-white"
            }
        >
            <span className="hidden lg:inline">Product</span>
        </NavLink>
    </div>
  )
}

export default DesktopNavbar
