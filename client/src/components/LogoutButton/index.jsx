import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import { useLocation, Navigate } from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  const location = useLocation();

  function handleLogout() {
    dispatch(logOut());
    console.log('Logged Out');
    <Navigate to='/' state={{ from: location }} replace />;
  }
  return (
    <Button variant='main' onClick={handleLogout}>
      Logout
    </Button>
  );
}
