import { DesktopNav } from '@/components/navigation/desktop-nav';
import { MobileNav } from '@/components/navigation/mobile-nav';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <DesktopNav />
      <MobileNav />
      <main className="flex-1 container mx-auto p-4 md:p-6 pb-20 md:pb-6">
        {children}
      </main>
    </div>
  );
}