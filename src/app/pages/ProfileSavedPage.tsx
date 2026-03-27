import { CheckCircle2, PencilLine } from 'lucide-react';
import { Link } from 'react-router';
import { ProfilePageFrame } from '../components/profile/ProfilePageFrame';
import { useAuth } from '../context/AuthContext';

export function ProfileSavedPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <ProfilePageFrame title="Mi perfil">
      <div className="mx-auto flex w-full max-w-[864px] flex-col gap-6">
        <aside className="rounded-2xl border border-[#bfbed0] bg-[#fafafa] p-4">
          <Link
            to="/profile/personal"
            className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-primary"
          >
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-[18px] leading-[1.5]">Mi perfil</span>
          </Link>
          <Link
            to="/profile/edit"
            className="mt-2 flex items-center gap-3 rounded-xl px-4 py-4 text-[#6b6b7b] transition-colors hover:bg-white hover:text-primary"
          >
            <PencilLine className="h-5 w-5" />
            <span className="text-[18px] leading-[1.5]">Editar perfil</span>
          </Link>
        </aside>

        <section className="rounded-2xl border border-[#bfbed0] bg-white p-6 md:p-8">
          <div className="mb-6 rounded-2xl bg-[#e8f5e9] p-4 text-[#2e7d32]">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5" />
              <p className="text-base leading-[1.5]">Cambios guardados correctamente.</p>
            </div>
          </div>

          <h2 className="text-[24px] font-bold leading-[1.3] text-primary">Hola, {user.name.split(' ')[0]}</h2>

          <div className="mt-8 grid gap-6">
            <InfoBlock label="Nombre completo" value={user.name} />
            <InfoBlock label="Correo electrónico" value={user.email} />
            <InfoBlock label="Número de teléfono" value={user.phone} />
            <InfoBlock label="Cédula de identidad (C.I.)" value={user.identificationNumber} />
          </div>

          <div className="mt-8 border-t border-[#e4e2eb] pt-8">
            <h3 className="text-[24px] font-bold leading-[1.3] text-primary">Datos de facturación</h3>
            <div className="mt-6 grid gap-6">
              <InfoBlock label="Nombre o razón social" value={user.name} />
              <InfoBlock label="Número de C.I. o N.I.T." value={user.taxId} />
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/profile/edit"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white transition-opacity hover:opacity-90"
            >
              Editar perfil
            </Link>
          </div>
        </section>
      </div>
    </ProfilePageFrame>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-1 text-sm leading-[1.5] tracking-[0.0014px] text-primary">{label}</p>
      <p className="text-sm leading-[1.5] tracking-[0.0014px] text-[#6b6b7b]">{value}</p>
    </div>
  );
}
