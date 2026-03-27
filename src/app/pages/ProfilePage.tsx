import { CarFront, LogOut, Package2, UserCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { ProfilePageFrame } from '../components/profile/ProfilePageFrame';
import { useAuth } from '../context/AuthContext';

export function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <ProfilePageFrame title="Mi perfil">
      <div className="mx-auto flex w-full max-w-[864px] flex-col gap-8">
        <section className="rounded-xl border border-[#bfbed0] bg-white p-6">
          <h2 className="text-[24px] font-bold leading-[1.3] text-primary">
            Hola, {user.name.split(' ')[0]}
          </h2>

          <div className="mt-6 grid gap-y-6">
            <InfoBlock label="Nombre completo" value={user.name} />
            <InfoBlock label="Correo electrónico" value={user.email} />
            <InfoBlock label="Número de teléfono" value={user.phone} />
            <InfoBlock label="Cédula de identidad (C.I.)" value={user.identificationNumber} />
          </div>

          <div className="mt-6 pt-2">
            <h3 className="text-[24px] font-bold leading-[1.3] text-primary">Datos de facturación</h3>
            <div className="mt-6 grid gap-y-6">
              <InfoBlock label="Nombre o razón social" value={user.name} />
              <InfoBlock label="Número de C.I. o N.I.T." value={user.taxId} />
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/profile/edit"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#e30613] px-6 text-white transition-opacity hover:opacity-90"
            >
              Editar perfil
            </Link>
          </div>
        </section>
      </div>
    </ProfilePageFrame>
  );
}

function MenuLink({
  icon: Icon,
  label,
  to,
  active = false,
}: {
  icon: typeof UserCircle2;
  label: string;
  to: string;
  active?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex h-12 items-center gap-2 rounded-xl px-4 transition-colors ${
        active ? 'bg-[#fafafa] text-primary' : 'bg-[#fafafa] text-[#6b6b7b] hover:text-primary'
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="text-[18px] leading-6">{label}</span>
    </Link>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-sm leading-6 tracking-[0.0014px] text-primary">{label}</p>
      <p className="text-sm leading-[1.5] tracking-[0.0014px] text-[#6b6b7b]">{value}</p>
    </div>
  );
}
