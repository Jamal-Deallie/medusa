import { useState } from 'react';
import {
  Typography,
  Grid,
  Box,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
} from '@mui/material';
import {
  MainButton,
  CustomInput,
  OutlineInput,
  CustomLink,
  Heading,
} from './styles';

import { useNavigate, useLocation } from 'react-router-dom';
import { useSignUpUserMutation } from '../../features/users/userSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [signUpUser, { isSuccess }] = useSignUpUserMutation();

  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const canSave = [firstName, lastName, email, password, passwordConfirm].every(
    Boolean
  );

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await signUpUser({
          firstName,
          lastName,
          email,
          password,
          passwordConfirm,
        }).unwrap();
      } catch (err) {
        if (!err?.originalStatus) {
          setError('No Server Response');
        } else if (err.originalStatus === 400) {
          setError('Missing Required Fields');
        } else if (err.originalStatus === 401) {
          setError('Unauthorized');
        } else {
          setError('Registration Failed');
        }
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '60rem',
        margin: '0 auto',
      }}>
      {error && error.message && (
        <Typography sx={{ textAlign: 'center' }}>{error}</Typography>
      )}
      <Heading>Sign Up</Heading>

      <Box sx={{ mt: 3 }} component='form' onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInput
              name='firstName'
              fullWidth
              id='outlined-required'
              label='First Name'
              onChange={e => setFirstName(e.target.value)}
              value={firstName}
              inputProps={{
                autoComplete: 'off',
              }}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              onChange={e => setLastName(e.target.value)}
              value={lastName}
          
              inputProps={{
                autoComplete: 'off',
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomInput
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
              inputProps={{
                autoComplete: 'off',
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel
                htmlFor='outlined-adornment-password'
                sx={{ color: 'secondary.light' }}>
                Password
              </InputLabel>
              <OutlineInput
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                onChange={e => setPassword(e.target.value)}
                name='password'
                autoComplete='new-password'
                value={password}
                startAdornment={
                  <InputAdornment position='start'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      aria-label='toggle password visibility'
                      sx={{ pointerEvents: 'click', color: 'secondary.light' }}>
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
                }
                label='Password'
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel
                htmlFor='outlined-adornment-password-confirm'
                sx={{ color: 'secondary.light' }}>
                Password Confirm
              </InputLabel>
              <OutlineInput
                type={showPassword ? 'text' : 'password'}
                onChange={e => setPasswordConfirm(e.target.value)}
                name='passwordConfirm'
                autoComplete='new-password'
                value={passwordConfirm}
                startAdornment={
                  <InputAdornment position='start'>
                    <IconButton
                      onClick={handleClickShowPassword}
                      aria-label='toggle password visibility'
                      sx={{ pointerEvents: 'click', color: 'secondary.light' }}>
                      {showPassword ? (
                        <VisibilityOff fontSize='large' />
                      ) : (
                        <Visibility fontSize='large' />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password Confirm'
              />
            </FormControl>
          </Grid>
        </Grid>
        <MainButton
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 5.5, mb: 2 }}>
          Sign Up
        </MainButton>

        <Grid item xs={12} sx={{ textAlign: 'center', pt: 5.5 }}>
          <CustomLink to='/signin' variant='body2'>
            Already have an account? Sign in
          </CustomLink>
        </Grid>
      </Box>
    </Box>
  );
}
