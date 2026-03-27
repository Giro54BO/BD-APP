import { ReactNode } from 'react';
import { AppHeader } from './AppHeader';
import { AppNavbar } from './AppNavbar';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex justify-center bg-[#e5e5e5] min-h-screen">
      {/* Mobile Container - Fixed width centered */}
      <div className="relative flex h-screen w-full max-w-[428px] flex-col overflow-hidden bg-background shadow-xl">
        {/* Sticky App Header */}
        <AppHeader />
        
        {/* Main Content - Scrollable area between header and navbar */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
        
        {/* Sticky Bottom Navigation */}
        <AppNavbar />
      </div>
    </div>
  );
}
