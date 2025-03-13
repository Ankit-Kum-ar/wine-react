import { Contact, HomeIcon, MenuIcon, ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
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
                        <MenuIcon className="h-5 w-5 text-white" />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="right"
                    className="w-[300px]"
                    customStyle={{ background: 'linear-gradient(90deg, #294732 0%, #0F1D16 100%)', color: '#fff' }}
                >
                    <SheetHeader>
                        <SheetTitle titleStyle={{ fontSize: "1.25rem", color: "#fff" }}>Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/" onClick={handleLinkClick}>
                                <HomeIcon className="w-4 h-4" />
                                Home
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/product" onClick={handleLinkClick}>
                                <ShoppingCart className="w-4 h-4" />
                                Product
                            </Link>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link to="/contact" onClick={handleLinkClick}>
                                <Contact className="w-4 h-4" />
                                Contact
                            </Link>
                        </Button>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar
