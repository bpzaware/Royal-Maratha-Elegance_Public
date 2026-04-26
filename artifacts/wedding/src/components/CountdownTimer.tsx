import { useCountdown } from "@/hooks/useCountdown";
import { GlassCard } from "./GlassCard";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, hasArrived } = useCountdown(targetDate);

  if (hasArrived) {
    return (
      <div className="text-center py-8">
        <h3 className="font-display text-2xl text-gold-gradient">The Day is Here!</h3>
      </div>
    );
  }

  const timeUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ];

  return (
    <div className="flex justify-center gap-3 md:gap-6">
      {timeUnits.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <GlassCard className="w-16 h-20 md:w-24 md:h-28 flex items-center justify-center p-0 mb-2">
            <span className="font-serif text-3xl md:text-5xl text-foreground font-light tracking-tighter">
              {value.toString().padStart(2, "0")}
            </span>
          </GlassCard>
          <span className="text-xs md:text-sm font-medium tracking-widest text-primary/80 uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
