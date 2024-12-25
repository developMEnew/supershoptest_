'use client';

import { CustomCalendar } from "@/components/calendar/custom-calendar";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Calendar</h2>
          <p className="text-muted-foreground">Plan your schedule and view upcoming events.</p>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <CustomCalendar />
      </div>
    </div>
  );
}