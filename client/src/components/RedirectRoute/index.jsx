import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../../features/auth/authSlice';

export default function RedirectRoute() {
  const token = useSelector(selectToken);
  const location = useLocation();

  return token ? (
    <Navigate to='/' state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
