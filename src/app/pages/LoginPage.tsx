import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import svgPaths from '../../imports/svg-8wbzm03iz0';
import imgBigdamAzul1 from '@/assets/618631a906a3f14879ebf268c012439e9a59550d.png';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Log the user in
    login(email, password);
    // Navigate to profile after login
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-3 py-6">
        <div className="w-full max-w-[364px] flex flex-col gap-6 px-3 py-6 rounded-3xl">
          {/* Title */}
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-4xl font-bold text-primary leading-[1.2] tracking-[-0.0054px]">
              Iniciar sesión
            </h1>
            <p className="text-2xl text-muted-foreground leading-[1.3]">
              Accede a tu cuenta BigDam
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                  placeholder="Ingresa tu contraseña"
                  required
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

            {/* Login Button */}
            <button
              type="submit"
              className="bg-primary h-[52px] rounded-xl flex items-center justify-center px-4 hover:opacity-90 transition-opacity"
            >
              <span className="text-base text-white leading-[1.5]">Iniciar sesión</span>
            </button>

            {/* Forgot Password Button */}
            <Link
              to="/forgot-password"
              className="bg-white h-[52px] rounded-xl flex items-center justify-center px-4 border border-transparent hover:border-border transition-colors"
            >
              <span className="text-base text-primary leading-[1.5]">Olvidaste tu contraseña</span>
            </Link>
          </form>

          {/* Divider */}
          <div className="h-px bg-border w-full" />

          {/* Register Link */}
          <div className="flex gap-6 items-center justify-center">
            <p className="flex-1 text-base text-muted-foreground leading-[1.5]">
              ¿No tienes cuenta?
            </p>
            <Link
              to="/register"
              className="bg-white flex-1 h-[52px] rounded-xl flex items-center justify-center px-4 border border-transparent hover:border-border transition-colors"
            >
              <span className="text-base text-primary leading-[1.5]">Crear cuenta aquí</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}