
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Instagram, X, Linkedin, ArrowRight, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a263f3f6-8960-4590-ad49-25165c6a1e3f.png" 
                alt="Spaak Logo" 
                className="h-16 mb-4"
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Stay Connected</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join our newsletter for exclusive insights and updates from The Spaak Conference 
              and DecisionSpaak Technologies.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Enter your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">TSC@decisionspaak.com</span>
              </div>
              <a 
                href="https://decisionspaak.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Globe className="h-5 w-5 text-yellow-400" />
                <span>Convener</span>
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/decisionspaak/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://x.com/decisionspaak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <X className="h-5 w-5" />
                <span>twitter</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/decisionspaak/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 DecisionSpaak Technologies. The Innovators' Innovators
            </p>
            <div className="text-yellow-400 font-semibold">
              Reinventing Human Possibility
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
