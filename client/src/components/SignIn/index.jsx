import React, { useState, useEffect } from 'react';
import {
  MainButton,
  FormWrap,
  CustomLink,
  CustomInput,
  OutlineInput,
  Heading,
  LinkContainer,
  FormContainer,
} from './styles';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
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

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [signInUser, { isLoading, isSuccess, data }] = useSignInUserMutation();

  const canSave = [email, password].every(Boolean) && !isLoading;

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCredentials({ token: data.token }));
      setEmail('');
      setPassword('');
      navigate('/');
    }
  }, [isSuccess]);

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
    <Container sx={{ position: 'relative', height: '60rem' }}>
      <FormWrap noValidate>
        {error && <Typography>{error}</Typography>}
        <Heading>Sign In</Heading>
        <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
          <Stack spacing={4}>
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
            <CustomInput
              label='Password'
              id='outlined-start-adornment'
              sx={{ m: 1 }}
              type={showPassword ? 'text' : 'password'}
              onChange={e => setPassword(e.target.value)}
              name='password'
              value={password}
              placeholder='Password'
              autoComplete='new-password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    {' '}
                    <IconButton
                      onClick={handleClickShowPassword}
                      aria-label='toggle password visibility'
                      sx={{
                        pointerEvents: 'click',
                        color: 'secondary.light',
                      }}>
                      {showPassword ? (
                        <VisibilityOff
                          fontSize='large'
                          sx={{ fill: 'secondary.light' }}
                        />
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

            <Button variant="main"onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Box>
      </FormWrap>
    </Container>
  );
}
