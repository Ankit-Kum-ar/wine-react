import { NavLink } from "react-router-dom"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-6">
        <NavLink 
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
            }
        >
            <span className="hidden lg:inline">Home</span>
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
            }
        >
            <span className="hidden lg:inline">About</span>
        </NavLink>
        <NavLink
            to="/product"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
            }
        >
            <span className="hidden lg:inline">Product</span>
        </NavLink>
        <NavLink
            to="/blog"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
            }
        >
            <span className="hidden lg:inline">Blog</span>
        </NavLink>
    </div>
  )
}

export default DesktopNavbar
