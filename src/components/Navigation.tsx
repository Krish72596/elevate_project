import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contests & Hackathons", href: "/contests" },
    { label: "Ask Chatbot", href: "/chatbot" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className="bg-nav text-nav-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-xl font-bold text-white hover:text-nav-hover transition-colors">Elevate</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.label} to={item.href}>
                <Button
                  variant={location.pathname === item.href ? "elevate" : "nav"}
                  size="sm"
                  className="px-4 py-2"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="elevate-outline" size="sm">
              Sign up
            </Button>
            <Button variant="elevate" size="sm">
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-nav-hover transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-nav-hover/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href}>
                  <Button
                    variant={location.pathname === item.href ? "elevate" : "nav"}
                    size="sm"
                    className="justify-start w-full"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-nav-hover/20">
              <Button variant="elevate-outline" size="sm">
                Sign up
              </Button>
              <Button variant="elevate" size="sm">
                Log in
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;