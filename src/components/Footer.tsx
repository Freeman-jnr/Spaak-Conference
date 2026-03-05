import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Instagram, Linkedin, ArrowRight, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & newsletter */}
          <div className="lg:col-span-2">
            <img
              src="/lovable-uploads/947fb705-f03c-49be-b003-c712719e6781.png"
              alt="Spaak Logo"
              className="h-16 w-16 rounded-full object-cover mb-6"
            />
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">Stay Connected</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              Join our newsletter for exclusive insights and updates from The Spaak Conference
              and DecisionSpaak Group — May 9, 2026.
            </p>
            <div className="flex gap-3">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-widest text-gray-300 mb-6">
              Contact
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400 shrink-0" />
                <span className="text-gray-400 text-sm">tsc@decisionspaak.com</span>
              </div>
              <a
                href="https://decisionspaak.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                <Globe className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>decisionspaak.com</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-widest text-gray-300 mb-6">
              Follow Us
            </h4>
            <div className="space-y-5">
              <a
                href="https://www.instagram.com/thespaakconference?igsh=MWZ2NjgycXVuOHJiMQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com/decisionspaak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                <img
                  src="/lovable-uploads/7d5c2c4e-3a7a-454d-9428-b7e7b908cbef.png"
                  alt="X Logo"
                  className="h-5 w-5"
                />
                <span>Twitter / X</span>
              </a>
              <a
                href="https://www.linkedin.com/company/decisionspaak/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 DecisionSpaak Group. The Innovators' Innovators ·{" "}
              <span className="text-yellow-400 font-semibold">May 9, 2026</span>
            </p>
            <p className="text-yellow-400 font-semibold text-sm">
              Reinventing Human Possibility
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
