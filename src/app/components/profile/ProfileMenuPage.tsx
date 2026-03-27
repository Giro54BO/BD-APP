import {
  CarFront,
  CircleHelp,
  LogOut,
  Package2,
  UserCircle2,
} from 'lucide-react';
import { Link } from 'react-router';

const menuItems = [
  {
    title: 'Mi perfil',
    to: '/profile/personal',
    icon: UserCircle2,
  },
  {
    title: 'Mi garage',
    to: '/profile/garage',
    icon: CarFront,
  },
  {
    title: 'Mis pedidos',
    to: '/profile/orders',
    icon: Package2,
  },
  {
    title: 'Centro de ayuda',
    to: '/help-center',
    icon: CircleHelp,
  },
];

const logoutItem = {
  title: 'Cerrar sesión',
  to: '/logout',
  icon: LogOut,
};

const menuCardClassName =
  'flex h-12 items-center gap-1 rounded-xl bg-[#fafafa] px-4 text-[18px] leading-[1.5] text-[#6b6b7b] transition-colors hover:bg-[#f5f5f7] hover:text-primary';

export function ProfileMenuPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-8 pb-28 pt-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Menú</h1>
        <div className="mx-auto flex min-h-[calc(100vh-208px)] w-full max-w-[412px] flex-col">
          <section className="space-y-6">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link key={item.title} to={item.to} className={menuCardClassName}>
                  <Icon className="h-6 w-6 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </section>

          <div className="mt-auto pt-6">
            <Link to={logoutItem.to} className={menuCardClassName}>
              <LogOut className="h-6 w-6 shrink-0" />
              <span>{logoutItem.title}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
