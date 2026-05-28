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

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    login(`${provider}@bigdam.demo`, provider);
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

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="flex h-[52px] items-center justify-center gap-3 rounded-xl border border-primary bg-white px-4 text-primary transition-colors hover:bg-[#f5f5f7]"
              >
                <GoogleIcon className="h-7 w-7 text-[#4285f4]" />
                <span className="text-base leading-[1.5]">Iniciar sesión con Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin('facebook')}
                className="flex h-[52px] items-center justify-center gap-3 rounded-xl border border-primary bg-white px-4 text-primary transition-colors hover:bg-[#f5f5f7]"
              >
                <FacebookIcon className="h-7 w-7 text-[#316ff6]" />
                <span className="text-base leading-[1.5]">Iniciar sesión con Facebook</span>
              </button>
            </div>
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

function GoogleIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285f4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34a853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#fbbc05"
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      />
      <path
        fill="#ea4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#316ff6"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"
      />
      <path
        fill="#fff"
        d="m16.67 15.56.53-3.49h-3.33V9.8c0-.96.47-1.89 1.96-1.89h1.51V4.95s-1.37-.24-2.68-.24c-2.74 0-4.53 1.67-4.53 4.7v2.66H7.08v3.49h3.05V24a12.18 12.18 0 0 0 3.74 0v-8.44h2.8z"
      />
    </svg>
  );
}
