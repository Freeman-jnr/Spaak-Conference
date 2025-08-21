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
  return <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-6xl mx-auto h-16 px-6 flex justify-between items-center">
        <img 
          src="/lovable-uploads/d7ed956c-d7e2-42e1-88d3-782a3998ef8e.png" 
          alt="The Spaak Conference" 
          className="h-[50px] w-auto" 
        />
        
        <div className="flex items-center gap-8">
          <button className="text-sm font-medium text-gray-700 hover:text-[#F2C230] py-3.5 px-2 transition-colors duration-200">
            Register
          </button>
          <button className="text-sm font-medium text-gray-700 hover:text-[#F2C230] py-3.5 px-2 transition-colors duration-200">
            Partner
          </button>
          <a 
            href="https://decisionspaak.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-700 hover:text-[#F2C230] py-3.5 px-2 transition-colors duration-200"
          >
            Convener
          </a>
        </div>
      </div>
    </nav>;
};