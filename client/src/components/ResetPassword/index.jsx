import React, { useState } from 'react';
import { FormWrap, CustomLink, OutlineInput } from './styles';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Container,
  InputAdornment,
  IconButton,
  InputLabel,
  FormControl,
  Stack,
} from '@mui/material';
import { useResetPasswordMutation } from '../../features/users/userSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();

  const canSave = [password, passwordConfirmation].every(Boolean) && !isLoading;

  if (isSuccess) {
    setPassword('');
    setPasswordConfirmation('');
    navigate('/');
  }
  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await resetPassword({ password, passwordConfirmation }).unwrap();
      } catch (err) {
        setError(err);
      }
    }
  };

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
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='header2'>Rest Password</Typography>
          </Box>
          <Box component='form' onSubmit={handleSubmit} sx={{ p: 2 }}>
            <Stack spacing={4}>
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Password
                </InputLabel>
                <OutlineInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPassword(e.target.value)}
                  name='password'
                  value={password}
                  autoComplete='new-password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{ pointerEvents: 'click', color: 'primary.main' }}>
                        {showPassword ? (
                          <VisibilityOff
                            fontSize='large'
                            sx={{ fill: 'primary.main' }}
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
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-adornment-password-confirm'>
                  Password Confirmation
                </InputLabel>
                <OutlineInput
                  id='outlined-adornment-password-confirm'
                  type={showPassword ? 'text' : 'password'}
                  onChange={e => setPasswordConfirmation(e.target.value)}
                  name='passwordConfirmation'
                  value={passwordConfirmation}
                  autoComplete='new-password'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={handleClickShowPassword}
                        aria-label='toggle password visibility'
                        sx={{ pointerEvents: 'click', color: 'primary.main' }}>
                        {showPassword ? (
                          <VisibilityOff
                            fontSize='large'
                            sx={{ fill: 'primary.main' }}
                          />
                        ) : (
                          <Visibility fontSize='large' />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password Confirmation'
                />
              </FormControl>

              <Button variant='tertiary' type='submit'>
                Submit
              </Button>
            </Stack>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
            <CustomLink to='/'>Cancel</CustomLink>
          </Box>
        </FormWrap>
      </Container>
    </Box>
  );
}
