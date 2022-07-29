import { useState, useCallback, useEffect } from 'react';
import {
  ResetPasswordSection,
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
import { useResetPasswordMutation } from '../../features/user/userSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [formData, setFormData] = useState({
    password: '',
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

  const [resetPassword, { isSuccess }] = useResetPasswordMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await resetPassword(formData).unwrap();
    } catch (err) {
      setError(' Reset Password Failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        password: '',
        passwordConfirm: '',
      });
      navigate(from, { replace: true });
    }
  }, [isSuccess, setFormData, navigate, from]);

  return (
    <ResetPasswordSection>
      <FormContainer>
        <FormWrap>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='header1' color='primary'>
              Reset Password
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
                <CustomLink to='/' variant='body2'>
                  Cancel
                </CustomLink>
              </Grid>
            </Stack>
          </Box>
        </FormWrap>
      </FormContainer>
    </ResetPasswordSection>
  );
}
