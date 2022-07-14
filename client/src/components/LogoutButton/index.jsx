import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/auth/authSlice';
import { clearCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function handleLogout() {
    dispatch(logOut());
    dispatch(clearCart());
    navigate('/', { replace: true });
  }

  return (
    <Button variant='main' onClick={handleLogout}>
      Logout
    </Button>
  );
}
