import svgPaths from '../../imports/svg-uy2i5d5etf';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  postTitle: string;
  postUrl: string;
}

export function ShareModal({ isOpen, onClose, postTitle, postUrl }: ShareModalProps) {
  if (!isOpen) return null;

  const handleShare = (platform: 'facebook' | 'whatsapp' | 'x') => {
    const encodedUrl = encodeURIComponent(postUrl);
    const encodedTitle = encodeURIComponent(postTitle);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
      case 'x':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-xl p-12 max-w-[580px] w-full flex flex-col gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex items-center justify-end w-full">
            <button 
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Cerrar"
            >
              <svg className="block size-full" fill="none" viewBox="0 0 13.3075 13.3075">
                <path d={svgPaths.p20bff00} fill="var(--color-primary)" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-3xl font-bold text-primary leading-[1.25] tracking-[-0.0016px]">
              ¡Listo para compartir!
            </h2>
            <p className="text-2xl text-muted-foreground leading-[1.3]">
              Ahora puedes enviarlo fácilmente por el medio que prefieras:
            </p>
          </div>

          {/* Social Media Buttons */}
          <div className="flex gap-6 items-start justify-center">
            {/* Facebook */}
            <button 
              onClick={() => handleShare('facebook')}
              className="flex flex-col gap-1 items-center hover:opacity-80 transition-opacity"
            >
              <div className="relative w-12 h-12">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 48 47.9999">
                  <path d={svgPaths.p36c43000} fill="var(--color-primary)" />
                </svg>
                <div className="absolute inset-[22.74%_29.57%_0_29.56%]">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 19.6194 37.0841">
                    <path d={svgPaths.p105db380} fill="white" />
                  </svg>
                </div>
              </div>
              <span className="text-base text-primary leading-[1.5]">Facebook</span>
            </button>

            {/* WhatsApp */}
            <button 
              onClick={() => handleShare('whatsapp')}
              className="flex flex-col gap-1 items-center hover:opacity-80 transition-opacity"
            >
              <div className="relative w-12 h-12">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 48 48">
                  <path d={svgPaths.pc08300} fill="var(--color-primary)" />
                </svg>
                <div className="absolute inset-[35.53%_34.37%_35.37%_36.53%]">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 6.98315 6.98315">
                    <path d={svgPaths.p17d75500} fill="#FDFDFD" />
                  </svg>
                </div>
                <div className="absolute inset-[18.5%_17.44%_18.49%_17.42%]">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 15.6337 15.1216">
                    <path d={svgPaths.p4f1e900} fill="#FDFDFD" />
                  </svg>
                </div>
              </div>
              <span className="text-base text-primary leading-[1.5]">Whatsapp</span>
            </button>

            {/* X (Twitter) */}
            <button 
              onClick={() => handleShare('x')}
              className="flex flex-col gap-1 items-center hover:opacity-80 transition-opacity"
            >
              <div className="relative w-12 h-12">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p22bb800} fill="var(--color-primary)" />
                </svg>
                <div className="absolute inset-[22.05%_20.14%_22.05%_20.13%]">
                  <svg className="absolute block size-full" fill="none" viewBox="0 0 14.3341 13.419">
                    <path d={svgPaths.p185ece00} fill="white" />
                  </svg>
                </div>
              </div>
              <span className="text-base text-primary leading-[1.5]">x</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
