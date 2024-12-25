import { DesktopNav } from '@/components/navigation/desktop-nav';
import { MobileNav } from '@/components/navigation/mobile-nav';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNav />
      <MobileNav />
      <main className="flex-1 container mx-auto p-4 md:p-6 pb-20 md:pb-6">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Dashboard</h2>
          <p className="text-muted-foreground">
            This is your dashboard overview. Start exploring the different sections using the navigation.
          </p>
        </div>
      </main>
    </div>
  );
}