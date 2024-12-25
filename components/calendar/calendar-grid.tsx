'use client';

import { CalendarDay } from "./calendar-day";
import { getDaysInMonth, startOfMonth, getDay, format, isToday as isDateToday } from "date-fns";

interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export function CalendarGrid({ currentDate, selectedDate, onSelectDate }: CalendarGridProps) {
  const daysInMonth = getDaysInMonth(currentDate);
  const startDay = getDay(startOfMonth(currentDate));
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Sample events (replace with your actual events data)
  const daysWithEvents = [4, 12, 18, 25];

  return (
    <div className="mt-6">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-sm text-muted-foreground text-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map((day) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
          const isToday = isDateToday(date);
          const isSelected = selectedDate ? format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') : false;
          
          return (
            <div key={day} className="flex justify-center">
              <CalendarDay
                date={day}
                isToday={isToday}
                isSelected={isSelected}
                hasEvents={daysWithEvents.includes(day)}
                onClick={() => onSelectDate(date)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}