import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CONFERENCE_DATE = new Date("2026-05-09T00:00:00");

function calculateTimeLeft(): TimeLeft {
  const difference = CONFERENCE_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

interface UnitBlockProps {
  value: number;
  label: string;
}

const UnitBlock = ({ value, label }: UnitBlockProps) => (
  <div className="flex flex-col items-center">
    <div
      className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums"
      style={{
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.20)",
      }}
    >
      {String(value).padStart(2, "0")}
    </div>
    <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-yellow-400 font-semibold">
      {label}
    </span>
  </div>
);

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in">
      <p className="text-white/80 text-sm uppercase tracking-widest font-medium">
        Conference starts in
      </p>
      <div className="flex items-start gap-2 sm:gap-3 md:gap-5">
        <UnitBlock value={timeLeft.days} label="Days" />
        <span className="text-white/60 text-xl sm:text-3xl md:text-4xl font-light mt-3.5 sm:mt-5 select-none">:</span>
        <UnitBlock value={timeLeft.hours} label="Hours" />
        <span className="text-white/60 text-xl sm:text-3xl md:text-4xl font-light mt-3.5 sm:mt-5 select-none">:</span>
        <UnitBlock value={timeLeft.minutes} label="Min" />
        <span className="text-white/60 text-xl sm:text-3xl md:text-4xl font-light mt-3.5 sm:mt-5 select-none">:</span>
        <UnitBlock value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
};
