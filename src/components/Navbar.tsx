
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, User, Home, Key } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3a53cd44-aca9-4ce8-be34-607c7c8ed5d1.png" 
              alt="LABone Logo" 
              className="h-10 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Home className="h-4 w-4" />
              <span>Trang chủ</span>
            </Link>
            <Link to="/licenses" className="text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Key className="h-4 w-4" />
              <span>License</span>
            </Link>
            <Link to="/security" className="text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Bảo mật</span>
            </Link>
            <Link to="/dashboard" className="text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Tài khoản</span>
            </Link>
            <Button size="sm" className="animate-slide-up">
              Đăng nhập
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-slide-in-right">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 p-2">
              <Home className="h-5 w-5" />
              <span>Trang chủ</span>
            </Link>
            <Link to="/licenses" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 p-2">
              <Key className="h-5 w-5" />
              <span>License</span>
            </Link>
            <Link to="/security" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 p-2">
              <Shield className="h-5 w-5" />
              <span>Bảo mật</span>
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2 p-2">
              <User className="h-5 w-5" />
              <span>Tài khoản</span>
            </Link>
            <Button size="sm" className="w-full">
              Đăng nhập
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
