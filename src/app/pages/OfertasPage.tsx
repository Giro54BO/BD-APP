import { useNavigate } from 'react-router';
import { categories } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import imgRectangle108 from "@/assets/3933b0d0bffbd89753266fe31fb84ab19652844c.png";
import imgAutomotriz1 from "@/assets/8fbb02c4d769107d2cb7a1b2bdb714216f6added.png";
import imgRectangle109 from "@/assets/387bde576e48661baaa1b7edcf923d557d2bf5b8.png";
import imgRectangle110 from "@/assets/2535b3843b5a5f4858be93048f290ee052d80a00.png";
import imgRectangle111 from "@/assets/eed34c2474772d44f0e8eb1a3db635b052eaa932.png";

export function OfertasPage() {
  const navigate = useNavigate();

  const categoryImagesMap: Record<string, string> = {
    Moda: imgRectangle108,
    Autopartes: imgAutomotriz1,
    'Electrónica': imgRectangle109,
    'Ferretería': imgRectangle110,
    Hogar: imgRectangle111,
  };

  const categoryImageClassMap: Record<string, string> = {
    Moda: 'h-[117%] w-[63%] left-[18%] top-[2.5%]',
    Autopartes: 'h-full w-full inset-0',
    'Electrónica': 'h-full w-full inset-0',
    'Ferretería': 'h-[277%] w-full left-0 top-[-19%]',
    Hogar: 'h-full w-full inset-0',
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-8 py-8">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Categorías</h1>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
              className="group flex w-[169px] flex-col gap-[10px] rounded-xl bg-[#f0f0f2] p-3 text-left transition-shadow hover:shadow-md"
            >
              <div className="relative h-[78px] overflow-hidden rounded-xl bg-[#302c67]">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(255,255,255,0.2) 5%, rgba(192,188,238,0.6) 27.5%, rgba(160,155,230,0.8) 38.75%, rgba(128,122,222,1) 50%, rgba(106,100,187,1) 59.495%, rgba(83,78,152,1) 68.99%, rgba(61,57,117,1) 78.486%, rgba(38,35,82,1) 87.981%)',
                  }}
                />
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={categoryImagesMap[category.name] ?? category.image}
                    alt={category.name}
                    className={`absolute transition-transform duration-200 group-hover:scale-[1.03] ${categoryImageClassMap[category.name] ?? 'inset-0 h-full w-full'}`}
                  />
                </div>
              </div>
              <p className="text-sm leading-[1.5] tracking-[0.0014px] text-primary">
                {category.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
