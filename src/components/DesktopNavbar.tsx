import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { BookOpen, HomeIcon, Rss, ShoppingCart } from "lucide-react"

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
            </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to="/about">
                <BookOpen className="w-4 h-4" />
                <span className="hidden lg:inline">About</span>
            </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to="/product">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden lg:inline">Product</span>
            </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link to="/blog">
                <Rss className="w-4 h-4" />
                <span className="hidden lg:inline">Blog</span>
            </Link>
        </Button>      
    </div>
  )
}

export default DesktopNavbar
