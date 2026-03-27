import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import svgPaths from '../../imports/svg-9h2l4um8dc';
import imgBigdamAzul1 from '@/assets/618631a906a3f14879ebf268c012439e9a59550d.png';

export function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clientType, setClientType] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showClientTypeDropdown, setShowClientTypeDropdown] = useState(false);

  const clientTypes = ['Mayorista', 'Promotor', 'Taller', 'Cliente Final'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    // Handle registration logic here
    console.log('Register:', { fullName, email, phone, clientType, password });
    // Navigate to home after registration
    navigate('/');
  };

  return (
    <div className="bg-white min-h-screen relative flex flex-col">
      {/* Header */}
      <div className="hidden">
        <Link to="/" className="flex items-center h-11">
          <img
            src={imgBigdamAzul1}
            alt="BigDam"
            className="h-[44.8px] w-[140px] object-cover"
          />
        </Link>
      </div>

      {/* Register Form */}
      <div className="flex-1 flex items-start justify-center px-3 py-6 overflow-y-auto">
        <div className="w-full max-w-[364px] flex flex-col gap-6 px-3 py-6 rounded-3xl">
          {/* Title */}
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-4xl font-bold text-primary leading-[1.2] tracking-[-0.0054px]">
              Crear cuenta
            </h1>
            <p className="text-2xl text-muted-foreground leading-[1.3]">
              Únete a BigDam y accede a todo nuestro catálogo
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Full Name Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-primary leading-[1.5]">
                Nombre completo *
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ingresa nombre y apellido"
                required
                className="bg-card h-[52px] border border-primary rounded-xl px-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-primary leading-[1.5]">
                Correo electrónico *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico"
                required
                className="bg-card h-[52px] border border-primary rounded-xl px-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-primary leading-[1.5]">
                Número de teléfono
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ingresa tu número"
                className="bg-card h-[52px] border border-primary rounded-xl px-3 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Client Type Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-primary leading-[1.5]">
                Tipo de cliente *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowClientTypeDropdown(!showClientTypeDropdown)}
                  className="bg-card h-[52px] border border-primary rounded-xl px-3 text-sm text-left w-full flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <span className={clientType ? 'text-primary' : 'text-muted-foreground'}>
                    {clientType || 'Selecciona tu perfil'}
                  </span>
                  <div className="w-6 h-6 flex-shrink-0">
                    <svg className="block size-full" fill="none" viewBox="0 0 11.3075 6.70775">
                      <path d={svgPaths.p1a7900} fill="var(--color-primary)" />
                    </svg>
                  </div>
                </button>
                {showClientTypeDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border rounded-xl shadow-lg z-10 max-h-48 overflow-y-auto">
                    {clientTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setClientType(type);
                          setShowClientTypeDropdown(false);
                        }}
                        className="w-full px-3 py-3 text-left text-sm text-primary hover:bg-muted transition-colors"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-primary leading-[1.5]">
                Contraseña *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  required
                  minLength={8}
                  className="bg-card h-[52px] border border-primary rounded-xl px-3 pr-12 text-sm text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center"
                >
                  <svg className="block size-full" fill="none" viewBox="0 0 20.923 14">
                    <path d={svgPaths.p5d16d00} fill="var(--color-primary)" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-0 cursor-pointer">
              <div className="w-6 h-6 flex-shrink-0 mt-0">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="sr-only"
                />
                <div className="w-[17px] h-[17px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                    <path d={svgPaths.p2eadfcf0} fill="var(--color-primary)" />
                  </svg>
                </div>
              </div>
              <span className="text-xs text-muted-foreground leading-[1.4] flex-1">
                Acepto los términos y condiciones y la política de privacidad
              </span>
            </label>

            {/* Register Button */}
            <button
              type="submit"
              className="bg-primary h-[52px] rounded-xl flex items-center justify-center px-4 hover:opacity-90 transition-opacity"
            >
              <span className="text-base text-white leading-[1.5]">Crear cuenta</span>
            </button>
          </form>

          {/* Divider */}
          <div className="h-px bg-border w-full" />

          {/* Login Link */}
          <div className="flex gap-6 items-center justify-center">
            <p className="flex-1 text-base text-muted-foreground leading-[1.5]">
              ¿Ya tiene cuenta?
            </p>
            <Link
              to="/login"
              className="bg-white flex-1 h-[52px] rounded-xl flex items-center justify-center px-4 border border-transparent hover:border-border transition-colors"
            >
              <span className="text-base text-primary leading-[1.5]">Inicia sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}