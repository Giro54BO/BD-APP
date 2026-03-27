import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function ProfileLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}
