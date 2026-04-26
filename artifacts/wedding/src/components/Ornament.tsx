import { cn } from "@/lib/utils";

export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("w-24 h-6 opacity-80", className)}>
      <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 15C45 5 35 0 25 0C11.1929 0 0 11.1929 0 25C0 27.7614 2.23858 30 5 30C7.76142 30 10 27.7614 10 25C10 16.7157 16.7157 10 25 10C30 10 35 12 40 18C43.5 22.5 46.5 25 50 25C53.5 25 56.5 22.5 60 18C65 12 70 10 75 10C83.2843 10 90 16.7157 90 25C90 27.7614 92.2386 30 95 30C97.7614 30 100 27.7614 100 25C100 11.1929 88.8071 0 75 0C65 0 55 5 50 15Z"
          fill="currentColor"
          className="text-primary"
        />
        <circle cx="50" cy="15" r="3" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  );
}
