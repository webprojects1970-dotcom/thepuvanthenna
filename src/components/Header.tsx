import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { hotelInfo } from "@/lib/hotelData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Accommodation", href: "/#accommodation" },
    { label: "Wellness", href: "/#wellness" },
    { label: "Location", href: "/#location" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Villa Stories", href: "/stories" },
  ];

  const scrollToSection = (hash: string) => {
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
    } else {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (href === '/') {
      navigate('/');
      window.scrollTo(0, 0);
    } else if (href.startsWith('/#')) {
      scrollToSection(href.substring(1));
    } else {
      navigate(href);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 backdrop-blur-md",
        isScrolled 
          ? "bg-white/90 shadow-sm" 
          : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className={cn(
            "font-serif text-2xl font-bold tracking-tight transition-all duration-300",
            isScrolled ? "text-hotel-900" : "text-white"
          )}
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          {hotelInfo.name.split(' ')[0]}
          <span className="text-primary"> {hotelInfo.name.split(' ')[1]}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = link.href === '/' 
              ? location.pathname === '/'
              : location.pathname === link.href || 
                (link.href.startsWith('/#') && location.pathname === '/' && location.hash === link.href.substring(1));

            return (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled ? "text-hotel-800" : "text-white",
                  isActive && 'text-primary after:w-full'
                )}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#booking');
            }}
            className="btn btn-primary px-5 py-2 text-sm rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden flex flex-col justify-center items-center w-10 h-10 border rounded-full",
            isScrolled ? "border-hotel-200" : "border-white/20"
          )}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "block w-5 h-0.5 transition-all duration-300 ease-out",
              isScrolled ? "bg-hotel-800" : "bg-white",
              isMobileMenuOpen && "transform rotate-45 translate-y-1"
            )} 
          />
          <span 
            className={cn(
              "block w-5 h-0.5 my-1 transition-all duration-300 ease-out",
              isScrolled ? "bg-hotel-800" : "bg-white",
              isMobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "block w-5 h-0.5 transition-all duration-300 ease-out",
              isScrolled ? "bg-hotel-800" : "bg-white",
              isMobileMenuOpen && "transform -rotate-45 -translate-y-1"
            )} 
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-white text-hotel-900 shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => {
            const isActive = link.href === '/' 
              ? location.pathname === '/'
              : location.pathname === link.href || 
                (link.href.startsWith('/#') && location.pathname === '/' && location.hash === link.href.substring(1));

            return (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-base font-medium py-2 border-b border-hotel-100",
                  isActive ? "text-primary" : "text-hotel-800"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(e, link.href);
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#booking');
            }}
            className="btn btn-primary px-5 py-2 text-base text-center rounded-full"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
