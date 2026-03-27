import imgBigdamAzul1 from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[1.2] relative shrink-0 text-[#302c67] text-[36px] tracking-[-0.0054px] w-full">Restablecer contraseña</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[#6b6b7b] text-[24px] w-full">Te enviaremos un enlace para restablecer tu contraseña</p>
    </div>
  );
}

function Campo() {
  return (
    <div className="bg-[#fafafa] h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Campo">
      <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6b6b7b] text-[14px] tracking-[0.0014px]">{`Ingresa tu correo electrónico `}</p>
        </div>
      </div>
    </div>
  );
}

function OlvideContrasena1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-1/2 px-[12px] py-[24px] rounded-[24px] top-[calc(50%+0.5px)] w-[364px]" data-name="Olvide contraseña">
      <Frame />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Campos">
        <p className="font-['Lato:Regular',sans-serif] h-[24px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[14px] tracking-[0.0014px] w-full">Correo electrónico *</p>
        <Campo />
      </div>
      <div className="bg-[#302c67] h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Enviar enlace de recuperación</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Volver al inicio de sesión</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderMovil() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[74px] items-center justify-center left-0 p-[24px] top-0 w-[412px]" data-name="Header/móvil">
      <div aria-hidden="true" className="absolute border-[#bfbed0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex h-[44px] items-center relative shrink-0 w-[138px]" data-name="BD">
        <div className="h-[44.8px] relative shrink-0 w-[140px]" data-name="BIGDAM AZUL 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBigdamAzul1} />
        </div>
      </div>
    </div>
  );
}

export default function OlvideContrasena() {
  return (
    <div className="bg-white relative size-full" data-name="Olvide contraseña">
      <OlvideContrasena1 />
      <HeaderMovil />
    </div>
  );
}