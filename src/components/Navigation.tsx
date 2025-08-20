import { useState, useEffect } from "react";
export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
  return <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/lovable-uploads/d7ed956c-d7e2-42e1-88d3-782a3998ef8e.png" alt="The Spaak Conference" className="h-12 md:h-16 font-bold" />
        
        <div className="flex gap-4">
          <button className="text-[#F2C230] font-bold hover:text-yellow-600 transition-colors duration-300">
            Register
          </button>
          <button className="text-[#F2C230] font-bold hover:text-yellow-600 transition-colors duration-300">
            Partner
          </button>
          <a 
            href="https://decisionspaak.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F2C230] font-bold hover:text-yellow-600 transition-colors duration-300"
          >
            Convener
          </a>
        </div>
      </div>
    </nav>;
};