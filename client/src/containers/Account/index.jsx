import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../features/auth/authSlice';

import Box from '@mui/material/Box';

export default function AccountContainer() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);


  console.log(user)
  return (
    <Box sx={{ width: '100%' }}>
      <div>
        <h1>My Account</h1>
      </div>
    </Box>
  );
}
