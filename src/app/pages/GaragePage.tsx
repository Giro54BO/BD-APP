import { CarFront, ChevronRight, Info, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { ProfilePageFrame } from '../components/profile/ProfilePageFrame';
import { initialVehicles } from '../data/profileData';

export function GaragePage() {
  const [vehicles, setVehicles] = useState(initialVehicles);

  const handleDelete = (id: string) => {
    setVehicles(vehicles.filter((v) => v.id !== id));
  };

  return (
    <ProfilePageFrame title="Mi garage">
      <div className="mx-8 max-w-[864px]">
        <div className="rounded-2xl bg-[#e8f2fd] p-4 text-[#11278b]">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0" />
            <p className="text-sm leading-[1.5] tracking-[0.0014px]">
              Guarda tus vehículos para filtrar repuestos compatibles rápidamente.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex items-center justify-between rounded-2xl border border-[#d9d8e3] bg-[#f0f0f2] p-4"
            >
              <div className="flex items-center gap-4">
                <CarFront className="h-6 w-6 text-primary" />
                <p className="text-[18px] leading-[1.5] text-primary">{vehicle.name}</p>
              </div>
              <button
                onClick={() => handleDelete(vehicle.id)}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-[#6b6b7b] transition-colors hover:bg-white hover:text-primary"
              >
                <Trash2 className="h-5 w-5" />
                <span className="text-base leading-[1.5]">Borrar</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </ProfilePageFrame>
  );
}
