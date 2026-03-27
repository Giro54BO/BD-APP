import { Link } from 'react-router';
import svgPaths from '../../imports/svg-byon5s4yjb';
import imgBigdamAzul1 from "@/assets/618631a906a3f14879ebf268c012439e9a59550d.png";
import imgImage58 from "@/assets/1fc4a3179194286e3de909ab6510e5141e3ccce0.png";
import imgImage59 from "@/assets/127927f341520b90d6948349f411b14b63ecc066.png";
import imgImage60 from "@/assets/855f6644fd4c935b120bfa427173093a7ea7c099.png";
import imgImage62 from "@/assets/65a4cc9e57394b6418cc884691c90dda27666826.png";
import imgImage61 from "@/assets/00580751d8b55d91cc2607b23085de59cef46e84.png";
import imgImage63 from "@/assets/dd22b30f801f4adf4d00a6cdc68df778d4775dfa.png";
import imgImage64 from "@/assets/82d6cbeb287d8cbcf76aebeecda4a66d946d2f0c.png";
import imgImage65 from "@/assets/27c8fb04206c30a4e6629355e70433d4707e197f.png";

export function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.0128px]">
                Sobre nosotros
              </h1>
              <p className="text-lg lg:text-2xl text-white/90 leading-[1.3]">
                Con más de 30 años de trayectoria en el sector automotriz, nos hemos consolidado como un referente en la distribución de repuestos y soluciones para vehículos. Hoy ampliamos nuestra propuesta con una tienda en línea que incorpora nuevas categorías
              </p>
            </div>
            <div className="relative h-[340px] lg:h-[516px] rounded-[24px] overflow-hidden">
              <img
                src={imgImage61}
                alt="BigDam Building"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ferretería y herramientas */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[302px] lg:h-[528px] overflow-hidden order-2 lg:order-1">
              <img
                src={imgImage63}
                alt="Tools"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-6xl font-bold text-foreground leading-[1.1] lg:leading-[1.25] tracking-[-0.0016px] lg:tracking-[-0.0128px]">
                Ferretería y herramientas
              </h2>
              <p className="text-base lg:text-2xl text-foreground leading-[1.5] lg:leading-[1.3]">
                Ahora con ferretería, herramientas y productos para el hogar, ofreciendo a nuestros clientes más opciones en un solo lugar. Seguimos trabajando con el mismo compromiso de siempre: calidad, confianza y buen servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos para el hogar */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl lg:text-6xl font-bold text-foreground leading-[1.1] lg:leading-[1.25] tracking-[-0.0016px] lg:tracking-[-0.0128px]">
                Productos para el hogar
              </h2>
              <p className="text-base lg:text-2xl text-foreground leading-[1.5] lg:leading-[1.3]">
                Ahora con ferretería, herramientas y productos para el hogar, ofreciendo a nuestros clientes más opciones en un solo lugar. Seguimos trabajando con el mismo compromiso de siempre: calidad, confianza y buen servicio.
              </p>
            </div>
            <div className="relative h-[302px] lg:h-[528px] overflow-hidden">
              <img
                src={imgImage64}
                alt="Home Products"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Repuestos automotrices */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[302px] lg:h-[528px] overflow-hidden order-2 lg:order-1">
              <img
                src={imgImage65}
                alt="Auto Parts"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <h2 className="text-3xl lg:text-6xl font-bold text-foreground leading-[1.1] lg:leading-[1.25] tracking-[-0.0016px] lg:tracking-[-0.0128px]">
                Repuestos automotrices
              </h2>
              <p className="text-base lg:text-2xl text-foreground leading-[1.5] lg:leading-[1.3]">
                Ahora con ferretería, herramientas y productos para el hogar, ofreciendo a nuestros clientes más opciones en un solo lugar. Seguimos trabajando con el mismo compromiso de siempre: calidad, confianza y buen servicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calidad Section */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl lg:text-6xl font-bold leading-[1.1] lg:leading-[1.25] tracking-[-0.0016px] lg:tracking-[-0.0128px]">
                Calidad
              </h2>
              <p className="text-base lg:text-2xl text-white/90 leading-[1.5] lg:leading-[1.3]">
                Con más de 30 años de trayectoria en el sector automotriz, nos hemos consolidado como un referente en la distribución
              </p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center lg:justify-end">
              <div className="relative rounded-full w-[114.349px] h-[114.349px] border border-border/20">
                <img
                  src={imgImage58}
                  alt="Brand 1"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="relative rounded-full w-[114.349px] h-[114.349px] border border-border/20 bg-white flex items-center justify-center">
                <img
                  src={imgImage59}
                  alt="Brand 2"
                  className="w-[71.91%] h-[37.77%] object-contain"
                />
              </div>
              <div className="relative rounded-full w-[114.349px] h-[114.349px] border border-border/20">
                <img
                  src={imgImage60}
                  alt="Brand 3"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="relative rounded-full w-[114.349px] h-[114.349px] border border-border/20 bg-white flex items-center justify-center">
                <img
                  src={imgImage62}
                  alt="Brand 4"
                  className="w-[81.04%] h-[51.16%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
