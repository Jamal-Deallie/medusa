import { useState, useCallback, useEffect } from 'react';
import {
  ForgotPasswordSection,
  CustomInput,
  CustomLink,
  LinkContainer,
  FormWrap,
  FormContainer,
  InnerContainer,
} from './styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Box, Stack, Button } from '@mui/material';
import { useForgotPasswordMutation } from '../../features/user/userSlice';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const updateFormData = useCallback(
    type => event => {
      setFormData({ ...formData, [type]: event.target.value });
    },
    [formData]
  );

  const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await forgotPassword(formData).unwrap();
    } catch (err) {
      setError('Forgot Password Failed');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        email: '',
      });
      navigate(from, { replace: true });
    }
  }, [isSuccess, setFormData, navigate, from]);

  return (
    <ForgotPasswordSection>
      <FormContainer>
        <FormWrap>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='header1' color='primary'>
              Forgot Password
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
          <Typography sx={{ textAlign: 'center' }}>
            Please enter your email address below. You will receive a link to
            reset your password.
          </Typography>
          <InnerContainer>
            <Stack
              spacing={4}
              component='form'
              onSubmit={handleSubmit}
              noValidate>
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

              <Button variant='main' type='submit'>
                Submit
              </Button>
              <LinkContainer>
                <CustomLink to='Return to Store'>Cancel</CustomLink>
              </LinkContainer>
            </Stack>
          </InnerContainer>
        </FormWrap>
      </FormContainer>
    </ForgotPasswordSection>
  );
}
