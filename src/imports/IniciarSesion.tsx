import svgPaths from "./svg-8wbzm03iz0";
import imgBigdamAzul1 from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";
import { imgVisibility } from "./svg-aoh9h";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[83px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[1.2] relative shrink-0 text-[#302c67] text-[36px] tracking-[-0.0054px] w-full">Iniciar sesión</p>
      <div className="font-['Lato:Regular',sans-serif] h-[36px] leading-[0] relative shrink-0 text-[#6b6b7b] text-[24px] w-full">
        <p className="leading-[1.3] mb-0">Accede a tu cuenta BigDam</p>
        <p className="leading-[1.3]">&nbsp;</p>
      </div>
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

function Campo1() {
  return (
    <div className="bg-[#fafafa] h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Campo">
      <div aria-hidden="true" className="absolute border border-[#302c67] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[4px] relative size-full">
          <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6b6b7b] text-[14px] tracking-[0.0014px]">Ingresa tu contraseña</p>
          <div className="relative shrink-0 size-[24px]" data-name="Visibilidad">
            <div className="absolute inset-[18.75%_6.41%_22.92%_6.41%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.538px_-4.5px] mask-size-[24px_24px]" data-name="visibility" style={{ maskImage: `url('${imgVisibility}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.923 14">
                <path d={svgPaths.p5d16d00} fill="var(--fill-0, #302C67)" id="visibility" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#6b6b7b] text-[16px]">¿No tienes cuenta?</p>
      <div className="bg-white flex-[1_0_0] h-[52px] min-h-px min-w-px relative rounded-[12px]" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Crear cuenta aquí</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InicioDeSesion() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-1/2 px-[12px] py-[24px] rounded-[24px] top-1/2 w-[364px]" data-name="Inicio de sesión">
      <Frame1 />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Campos">
        <p className="font-['Lato:Regular',sans-serif] h-[24px] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[14px] tracking-[0.0014px] w-full">Correo electrónico *</p>
        <Campo />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Campos">
        <div className="font-['Lato:Regular',sans-serif] h-[24px] leading-[0] not-italic relative shrink-0 text-[#302c67] text-[14px] tracking-[0.0014px] w-full">
          <p className="leading-[1.5] mb-0">Contraseña *</p>
          <p className="leading-[1.5]">&nbsp;</p>
        </div>
        <Campo1 />
      </div>
      <div className="bg-[#302c67] h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Iniciar sesión</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Botones">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative size-full">
            <p className="font-['Lato:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#302c67] text-[16px] whitespace-nowrap">Olvidaste tu contraseña</p>
          </div>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 340 1">
            <line id="Line 34" stroke="var(--stroke-0, #BFBED0)" x2="340" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame />
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

export default function IniciarSesion() {
  return (
    <div className="bg-white relative size-full" data-name="Iniciar sesión">
      <InicioDeSesion />
      <HeaderMovil />
    </div>
  );
}