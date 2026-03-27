import type { ReactNode } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ProfilePageFrameProps {
  title: string;
  children: ReactNode;
  backTo?: string;
  closeTo?: string;
}

export function ProfilePageFrame({
  title,
  children,
  backTo = '/profile',
  closeTo = '/',
}: ProfilePageFrameProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-4 sm:py-6">
          <button
            type="button"
            onClick={() => navigate(backTo)}
            aria-label="Volver"
            className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6 text-primary" />
          </button>
          <h1 className="mx-2 flex-1 text-center text-[24px] font-bold leading-[1.3] text-primary">
            {title}
          </h1>
          <button
            type="button"
            onClick={() => navigate(closeTo)}
            aria-label="Cerrar"
            className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-8 py-8">
        {children}
      </div>
    </div>
  );
}
