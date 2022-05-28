import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

export default function RequireAuthorization() {
  const token = useSelector(selectToken);
  const location = useLocation();
  
  return token ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}
