import { BookOpen, HomeIcon, MenuIcon, NotebookPen, ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import { SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleLinkClick = () => {
        setShowMobileMenu(false);
    };

    return (
        <div className="flex md:hidden items-center space-x-2">
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MenuIcon className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/" onClick={handleLinkClick}>
                                <HomeIcon className="w-4 h-4" />
                                Home
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/about" onClick={handleLinkClick}>
                                <BookOpen className="w-4 h-4" />
                                About
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/product" onClick={handleLinkClick}>
                                <ShoppingCart className="w-4 h-4" />
                                Product
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/blog" onClick={handleLinkClick}>
                                <NotebookPen className="w-4 h-4" />
                                Blog
                            </Link>
                        </Button>   
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar
