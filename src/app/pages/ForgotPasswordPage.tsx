import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import imgBigdamAzul1 from '@/assets/618631a906a3f14879ebf268c012439e9a59550d.png';

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Reset password for:', email);
    alert('Se ha enviado un enlace de recuperación a tu correo electrónico');
    navigate('/login');
  };

  return (
    <div className="bg-white min-h-screen relative flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border h-[74px] flex items-center justify-center px-6">
        <Link to="/" className="flex items-center h-11">
          <img
            src={imgBigdamAzul1}
            alt="BigDam"
            className="h-[44.8px] w-[140px] object-cover"
          />
        </Link>
      </div>

      {/* Forgot Password Form */}
      <div className="flex-1 flex items-center justify-center px-3 py-6">
        <div className="w-full max-w-[364px] flex flex-col gap-6 px-3 py-6 rounded-3xl">
          {/* Title */}
          <div className="flex flex-col gap-1 text-center">
            <h1 className="text-4xl font-bold text-primary leading-[1.2] tracking-[-0.0054px]">
              Restablecer contraseña
            </h1>
            <p className="text-2xl text-muted-foreground leading-[1.3]">
              Te enviaremos un enlace para restablecer tu contraseña
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

            {/* Send Reset Link Button */}
            <button
              type="submit"
              className="bg-primary h-[52px] rounded-xl flex items-center justify-center px-4 hover:opacity-90 transition-opacity"
            >
              <span className="text-base text-white leading-[1.5]">Enviar enlace de recuperación</span>
            </button>

            {/* Back to Login Button */}
            <Link
              to="/login"
              className="bg-white h-[52px] rounded-xl flex items-center justify-center px-4 border border-transparent hover:border-border transition-colors"
            >
              <span className="text-base text-primary leading-[1.5]">Volver al inicio de sesión</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
