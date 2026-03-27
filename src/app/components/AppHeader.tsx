import { useNavigate } from 'react-router';
import BanerMobile2003205 from '../../imports/BanerMobile-2003-205';
import HeaderApp from '../../imports/HeaderApp';

export function AppHeader() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Red Banner */}
      <BanerMobile2003205 />
      
      {/* Search Header - Make clickable */}
      <div onClick={handleSearchClick} className="cursor-pointer hover:opacity-90 transition-opacity">
        <HeaderApp />
      </div>
    </div>
  );
}