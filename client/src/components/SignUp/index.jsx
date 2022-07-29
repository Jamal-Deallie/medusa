import React, { useState, useCallback, useEffect } from 'react';
import {
  SignUpSection,
  FormWrap,
  CustomInput,
  CustomLink,
  FormContainer,
} from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Grid,
  Button,
  InputAdornment,
  IconButton,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { useSignUpUserMutation } from '../../features/user/userSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    passwordConfirm: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  const [signUpUser, { isSuccess }] = useSignUpUserMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await signUpUser(formData).unwrap();
    } catch (err) {
      setError('Sign Up Failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        password: '',
        email: '',
        passwordConfirm: '',
      });
      navigate(from, { replace: true });
    }
  }, [isSuccess, setFormData, navigate, from]);

  return (
    <SignUpSection>
      <FormContainer>
        <FormWrap>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='header1' color='primary'>
              Sign Up
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2.5 }}>
            {error && (
              <Typography
                variant='body1'
                sx={{ color: 'primary.main', textAlign: 'center' }}>
                {error}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 7.5 }}>
            <Stack
              spacing={4}
              component='form'
              onSubmit={handleSubmit}
              noValidate>
              <CustomInput
                name='firstName'
                fullWidth
                id='firstName'
                label='First Name'
                onChange={updateFormData('firstName')}
                value={formData.firstName}
                inputProps={{
                  autoComplete: 'off',
                }}
                autoFocus
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <CustomInput
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                onChange={updateFormData('lastName')}
                value={formData.lastName}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <CustomInput
                margin='normal'
                fullWidth
                id='user'
                label='Email Address'
                onChange={updateFormData('email')}
                value={formData.email}
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
                onChange={updateFormData('password')}
                value={formData.password}
                name='password'
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
              <CustomInput
                fullWidth
                label='Password'
                id='outlined-start-adornment'
                type={showPassword ? 'text' : 'password'}
                onChange={updateFormData('passwordConfirm')}
                value={formData.passwordConfirm}
                name='passwordConfirm'
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

              <Button variant='main' type='submit'>
                Submit
              </Button>

              <Grid item xs={12} sx={{ textAlign: 'center', pt: 2.5 }}>
                <CustomLink to='signin' variant='body2'>
                  Already have an account? Sign in
                </CustomLink>
              </Grid>
            </Stack>
          </Box>
        </FormWrap>
      </FormContainer>
    </SignUpSection>
  );
}
