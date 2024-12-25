'use client';

import { cn } from "@/lib/utils";

interface CalendarDayProps {
  date: number;
  isToday: boolean;
  isSelected: boolean;
  onClick: () => void;
  hasEvents?: boolean;
}

export function CalendarDay({ date, isToday, isSelected, onClick, hasEvents }: CalendarDayProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center relative",
        isSelected && "bg-primary text-primary-foreground",
        !isSelected && isToday && "border border-primary",
        !isSelected && !isToday && "hover:bg-muted"
      )}
    >
      <span>{date}</span>
      {hasEvents && (
        <span className={cn(
          "absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full",
          isSelected ? "bg-primary-foreground" : "bg-primary"
        )} />
      )}
    </button>
  );
}