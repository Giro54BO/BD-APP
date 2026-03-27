import { Outlet } from 'react-router';
import { AppLayout } from '../components/AppLayout';
import { ScrollToTop } from '../components/ScrollToTop';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function RootLayout() {
  return (
    <AppLayout>
      <ScrollToTop />

      {/* Main content area */}
      <Outlet />
      
      {/* WhatsApp Chat Button */}
      <WhatsAppButton />
    </AppLayout>
  );
}
