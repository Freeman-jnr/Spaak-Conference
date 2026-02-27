import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const { theme } = useTheme();
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${theme === 'light' ? 'bg-white/80' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
        <img
          src="/lovable-uploads/947fb705-f03c-49be-b003-c712719e6781.png"
          alt="The Spaak Conference"
          className="h-[50px] w-[50px] rounded-full object-cover"
        />

        {/* Desktop links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <a
            href="https://decisionspaak.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium hover:text-yellow-400 focus:text-yellow-400 py-3.5 px-2 transition-colors duration-200 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Convener
          </a>
          <button
            onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
            className={`text-sm font-medium hover:text-yellow-400 focus:text-yellow-400 py-3.5 px-2 transition-colors duration-200 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Partner
          </button>

          <a
            href="https://decisionspaak.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-medium hover:text-yellow-400 focus:text-yellow-400 py-3.5 px-2 transition-colors duration-200 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
          >
            Contact
          </a>
        </div>

        {/* Desktop Register + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://form.jotform.com/decisionspaak/thespaakconference2026registration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-gray-900 hover:bg-yellow-500 transition-colors duration-200 shadow-sm"
          >
            Register
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4 animate-fade-in">
          <a
            href="https://decisionspaak.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="text-base font-medium text-white hover:text-yellow-400 transition-colors duration-200"
          >
            Convener
          </a>
          <button
            onClick={() => { document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' }); closeMobile(); }}
            className="text-base font-medium text-white hover:text-yellow-400 transition-colors duration-200 text-left"
          >
            Partner
          </button>
          <button
            onClick={() => { document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); closeMobile(); }}
            className="text-base font-medium text-white hover:text-yellow-400 transition-colors duration-200 text-left"
          >
            Contact
          </button>
          <a
            href="https://form.jotform.com/decisionspaak/thespaakconference2026registration"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-yellow-500 transition-colors duration-200 shadow-sm mt-2"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
};
