import React, { useState, useEffect } from 'react';
import { MainButton, FormWrap, CustomLink, CustomInput, Text } from './styles';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  TextField,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Stack,
} from '@mui/material';
import { useSignInUserMutation } from '../../features/users/userSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const canSave = [email, password].every(Boolean) && !isLoading;

  if (isSuccess) {
    dispatch(setCredentials({ token: data.token, user: data.user }));
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.token));
    setEmail('');
    setPassword('');
    navigate('/dashboard');
  }
  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await signInUser({ email, password }).unwrap();
      } catch (err) {
        if (!err?.originalStatus) {
          // isLoading: true until timeout occurs
          setError('No Server Response');
        } else if (err.originalStatus === 400) {
          setError('Missing Username or Password');
        } else if (err.originalStatus === 401) {
          setError('Unauthorized');
        } else {
          setError('Login Failed');
        }
      }
    }
  };

  const handleEmailInput = e => setEmail(e.target.value);

  const handlePasswordInput = e => setPassword(e.target.value);

  return (
    <Box
      sx={{
        position: 'relative',
        height: 'auto',
        padding: '12.5rem 0',
        backgroundColor: 'secondary.light',
      }}>
      <Container sx={{ position: 'relative', height: '60rem' }}>
        <FormWrap noValidate>
          {error && <Typography>{error}</Typography>}
          <Typography
            variant='h1'
            sx={{
              fontFamily: ' tenez, sans-serif',
              textTransform: 'capitalize',
              textAlign: 'center',
            }}>
            Forgot Password
          </Typography>
          <Text>We will send you an email to reset your password</Text>
          <Box component='form' onSubmit={handleSubmit} sx={{ py: 5 }}>
            <Stack spacing={5}>
              <CustomInput
                margin='normal'
                fullWidth
                id='user'
                placeholder='Email'
                label='Email Address'
                onChange={e => setEmail(e.target.value)}
                value={email}
                autoFocus
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <MainButton onClick={handleSubmit}>Submit</MainButton>
            </Stack>
            <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
              <CustomLink to='/cancel'>Go Back</CustomLink>
            </Box>
          </Box>
        </FormWrap>
      </Container>
    </Box>
  );
}
