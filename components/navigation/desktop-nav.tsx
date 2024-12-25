'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Settings, Users, BarChart3, Calendar } from 'lucide-react';
import { AuthButton } from './auth-button';
import { UserNav } from './user-nav';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function DesktopNav() {
  const pathname = usePathname();
  // TODO: Replace with actual auth state
  const isAuthenticated = false;

  return (
    <nav className="hidden md:flex px-4 h-16 items-center justify-between border-b bg-background">
      <div className="flex items-center space-x-8">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <div>
        {isAuthenticated ? <UserNav /> : <AuthButton />}
      </div>
    </nav>
  );
}