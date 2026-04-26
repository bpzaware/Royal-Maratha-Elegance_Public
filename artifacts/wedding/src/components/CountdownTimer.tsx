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
        <h3 className="font-display text-3xl text-saffron-gradient">
          The Sacred Day Has Arrived
        </h3>
      </div>
    );
  }

  const units = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Mins", value: minutes },
    { label: "Secs", value: seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-2xl mx-auto">
      {units.map(({ label, value }) => (
        <GlassCard
          key={label}
          className="flex flex-col items-center justify-center py-5 md:py-7 px-2"
        >
          <span className="font-display text-3xl md:text-5xl font-bold text-saffron-gradient leading-none">
            {value.toString().padStart(2, "0")}
          </span>
          <span className="mt-3 text-[0.65rem] md:text-xs font-display tracking-[0.32em] uppercase text-foreground/55">
            {label}
          </span>
        </GlassCard>
      ))}
    </div>
  );
}
