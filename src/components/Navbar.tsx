import { ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from localStorage (token)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // If logged in, go to profile or logout option
      navigate("/profile");
    } else {
      // If not logged in, go to login page
      navigate("/login");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter">
              FASHIONFIT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#women"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Women
            </a>
            <a
              href="#men"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Men
            </a>
            <a
              href="#new"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              New Arrivals
            </a>
            <a
              href="#sale"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Sale
            </a>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-64"
                />
              </div>
            </div>

            {/* Login / Profile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleAuthClick}
              title={isLoggedIn ? "Profile" : "Login / Sign Up"}
            >
              <User className="h-5 w-5" />
            </Button>

            {/* OR you can also show a Login button explicitly */}
            {!isLoggedIn && (
              <Button
                variant="outline"
                className="hidden sm:block"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
