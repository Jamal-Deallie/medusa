import React, { useState } from 'react';
import {
  FormWrap,
  CustomLink,
  CustomInput,
  Heading,
  LinkContainer,
} from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Container,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material';
import { useSignInUserMutation } from '../../features/users/userSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || '/';
  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();
  const canSave = [email, password].every(Boolean) && !isLoading;

  if (isSuccess) {
    dispatch(setCredentials({ token: data.token, name: data.user.firstName }));
    setEmail('');
    setPassword('');
    navigate(from, { replace: true });
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
          setError('Login Failed');
        }
      }
    }
  };

  return (
    <Container sx={{ position: 'relative', height: '60rem' }}>
      <FormWrap noValidate>
        <Box sx={{ textAlign: 'center' }}>
          {error && (
            <Typography
              variant='body1'
              sx={{ color: 'primary.main', textAlign: 'center' }}>
              {error}
            </Typography>
          )}
        </Box>
        <Heading>Sign In</Heading>
        <Box
          action='localhost:4000/api/v1/users/signin'
          component='form'
          onSubmit={handleSubmit}
          sx={{ p: 2 }}
          type='POST'>
          <Stack spacing={4}>
            <CustomInput
              margin='normal'
              fullWidth
              id='user'
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
            <CustomInput
              fullWidth
              label='Password'
              id='outlined-start-adornment'
              type={showPassword ? 'text' : 'password'}
              onChange={e => setPassword(e.target.value)}
              name='password'
              value={password}
              autoComplete='new-password'
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='start'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      aria-label='toggle password visibility'
                      sx={{
                        pointerEvents: 'click',
                      }}>
                      {showPassword ? (
                        <VisibilityOff fontSize='large' />
                      ) : (
                        <Visibility fontSize='large' />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <LinkContainer>
              <CustomLink to='/forgotpassword'>Forgot Password</CustomLink>
              <Typography>|</Typography>
              <CustomLink to='/signup'>Create An Account</CustomLink>
            </LinkContainer>

            <Button variant='tertiary' type='submit'>
              Submit
            </Button>
          </Stack>
        </Box>
      </FormWrap>
    </Container>
  );
}
