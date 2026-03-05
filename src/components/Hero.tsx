import React from "react";
import { ArrowRight, Calendar, Users, Handshake } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const FeatureCard = ({ icon, title, description, href }: FeatureCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group/card relative flex items-center justify-between gap-4 rounded-2xl px-7 py-6 transition-all duration-300 cursor-pointer overflow-hidden"
    style={{
      background: "hsl(220 40% 8% / 0.90)",
      border: "1px solid hsl(43 95% 56% / 0.25)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      boxShadow: "0 0 0 0 hsl(214 80% 55% / 0)",
      transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.boxShadow = "0 0 28px 6px hsl(43 95% 56% / 0.30), inset 0 0 40px 0 hsl(43 95% 56% / 0.06)";
      el.style.borderColor = "hsl(43 95% 56% / 0.80)";
      el.style.transform = "translateY(-3px)";
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLElement;
      el.style.boxShadow = "0 0 0 0 hsl(43 95% 56% / 0)";
      el.style.borderColor = "hsl(43 95% 56% / 0.25)";
      el.style.transform = "translateY(0)";
    }}
  >
    {/* Left: text */}
    <div className="flex flex-col gap-1 z-10 min-w-0">
      <span className="text-white font-bold text-lg leading-snug group-hover/card:text-yellow-400 transition-colors duration-300">
        {title}
      </span>
      <span className="text-white/55 text-sm leading-relaxed">{description}</span>
      <span className="mt-3 inline-flex items-center gap-1 text-yellow-400 text-xs font-semibold uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        Open form <ArrowRight className="h-3 w-3" />
      </span>
    </div>

    {/* Right: icon */}
    <div
      className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl transition-transform duration-300 group-hover/card:scale-110"
      style={{
        background: "hsl(220 40% 13% / 0.80)",
        border: "1px solid hsl(43 95% 56% / 0.25)",
      }}
    >
      {icon}
    </div>
  </a>
);

export const Hero = () => {
  return (
    <section className="relative overflow-hidden group">
      {/* Hero Background Image — covers everything including feature cards */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/hero-image.png"
          alt="Reinventing Human Possibility"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Glassmorphism overlay — on section hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.04)",
          }}
        />
      </div>

      {/* ── Main hero content ── */}
      <div className="relative z-10 container mx-auto text-white flex flex-col justify-center min-h-screen px-4 pt-32 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end w-full max-w-6xl mx-auto">

          {/* Left — Headline + Date */}
          <div className="flex flex-col items-start animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] drop-shadow-lg tracking-tight">
              Reinventing
              <span className="block text-yellow-400 mt-2 drop-shadow-lg">Human</span>
              <span className="block text-yellow-400 drop-shadow-lg">Possibility</span>
            </h1>
            <div className="mt-8 inline-flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg">
              <Calendar className="h-4 w-4" />
              May 9, 2026
            </div>
          </div>

          {/* Right — Description */}
          <div className="flex flex-col items-start animate-fade-in">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              The Spaak Conference 2026 is where bold ideas meet radical execution.
              Join a community of innovators, builders, and thinkers creating human-centered
              solutions that shift culture and reshape the future.
            </p>
          </div>

        </div>

        {/* Countdown Timer — centered below */}
        <div className="mt-12 animate-fade-in">
          <CountdownTimer />
        </div>
      </div>

      {/* ── Feature Cards strip — sits over hero image ── */}
      <div className="relative z-10 w-full py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <FeatureCard
              href="https://luma.com/ped6p5qz"
              title="Register Now"
              description="Secure your seat at The Spaak Conference on May 9, 2026."
              icon={
                <Calendar
                  className="h-7 w-7"
                  style={{ color: "hsl(43 95% 56%)" }}
                />
              }
            />
            <FeatureCard
              href="https://form.jotform.com/decisionspaak/speakersapplication"
              title="Become a Speaker"
              description="Share your ideas on stage with bold thinkers and change-makers."
              icon={
                <Users
                  className="h-7 w-7"
                  style={{ color: "hsl(43 95% 56%)" }}
                />
              }
            />
            <FeatureCard
              href="https://form.jotform.com/decisionspaak/partnerwithus"
              title="Partner With Us"
              description="Align your brand with a movement that's reshaping human potential."
              icon={
                <Handshake
                  className="h-7 w-7"
                  style={{ color: "hsl(43 95% 56%)" }}
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
