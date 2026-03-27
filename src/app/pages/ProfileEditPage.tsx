import { CarFront, LogOut, Package2, PencilLine, UserCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { ProfilePageFrame } from '../components/profile/ProfilePageFrame';
import { useAuth } from '../context/AuthContext';

export function ProfileEditPage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    identificationNumber: user?.identificationNumber || '',
    taxId: user?.taxId || '',
  });

  if (!user) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    navigate('/profile/saved');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ProfilePageFrame title="Mi perfil">
      <div className="mx-auto flex w-full max-w-[864px] flex-col gap-6">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-[#bfbed0] bg-white p-6 md:p-8">
          <h2 className="text-[24px] font-bold leading-[1.3] text-primary">Mi perfil</h2>

          <div className="mt-8 grid gap-6">
            <Field
              label="Nombre completo *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa nombre y apellido"
            />
            <Field
              label="Correo electrónico *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
            />
            <Field
              label="Número de teléfono *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ingresa tu número"
            />
            <Field
              label="Cédula de identidad (C.I.) *"
              name="identificationNumber"
              value={formData.identificationNumber}
              onChange={handleChange}
              placeholder="Ingresar número de cédula de identidad"
            />
          </div>

          <div className="mt-8 border-t border-[#e4e2eb] pt-8">
            <h3 className="text-[24px] font-bold leading-[1.3] text-primary">Datos de facturación</h3>
            <div className="mt-6 grid gap-6">
              <Field
                label="Nombre o razón social"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ingresar nombre o razón social"
              />
              <Field
                label="Número de C.I. o N.I.T."
                name="taxId"
                value={formData.taxId}
                onChange={handleChange}
                placeholder="Ingresa tu número de C.I. o N.I.T."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 rounded-xl bg-primary px-8 py-3 text-white transition-opacity hover:opacity-90"
          >
            Guardar
          </button>
        </form>
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
      className={`flex items-center gap-3 rounded-xl px-4 py-4 transition-colors ${
        active ? 'bg-white text-primary' : 'text-[#6b6b7b] hover:bg-white hover:text-primary'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-lg">{label}</span>
    </Link>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm leading-[1.5] tracking-[0.0014px] text-primary">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={label.includes('*')}
        className="w-full rounded-xl border border-[#302c67] bg-[#fafafa] px-4 py-3 text-sm leading-[1.5] tracking-[0.0014px] text-primary placeholder:text-[#6b6b7b] focus:outline-none"
      />
    </label>
  );
}
