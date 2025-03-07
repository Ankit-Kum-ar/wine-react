import { Link, NavLink } from "react-router-dom"
import { Button } from "./ui/button"
import { BookOpen, HomeIcon, NotebookPen, ShoppingCart } from "lucide-react"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
        <NavLink 
            to="/"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "text-white flex items-center gap-2"
                    : "text-slate-400 flex items-center gap-2"
            }
        >
            <HomeIcon className="w-4 h-4" />
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
            <BookOpen className="w-4 h-4" />
            <span className="hidden lg:inline">About</span>
        </NavLink>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to="/product">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden lg:inline">Product</span>
            </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to="/blog">
                <NotebookPen className="w-4 h-4" />
                <span className="hidden lg:inline">Blog</span>
            </Link>
        </Button>
    </div>
  )
}

export default DesktopNavbar
