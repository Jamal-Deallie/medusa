import React, { useState } from 'react';
import {
  FormWrap,
  CustomLink,
  CustomInput,
  ForgotPasswordSection,
} from './styles';
import { Typography, Box, Container, Stack, Button } from '@mui/material';
import { useForgotPasswordMutation } from '../../features/users/userSlice';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  const [forgotPassword, { isLoading, isSuccess }] =
    useForgotPasswordMutation();
  const canSave = [email].every(Boolean) && !isLoading;

  if (isSuccess) {
    setEmail('');
    setConfirmation('An email to reset your password has been sent');
  }

  const handleSubmit = async () => {
    if (canSave) {
      try {
        await forgotPassword({ email }).unwrap();
      } catch (err) {
        setError('Submission has failed');
      }
    }
  };

  return (
    <ForgotPasswordSection>
      <Container sx={{ position: 'relative', height: '60rem' }}>
        <FormWrap noValidate>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='header2'>Forgot Password</Typography>
          </Box>
          <Box sx={{ my: 2 }}>
            {confirmation && (
              <Typography sx={{ color: 'primary.main' }}>
                {confirmation}
              </Typography>
            )}
            {error && (
              <Typography sx={{ color: 'primary.main' }}>{error}</Typography>
            )}
          </Box>

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

              <Button variant='tertiary' type='submit'>
                Submit
              </Button>
            </Stack>
            <Box sx={{ textAlign: 'center', mt: 2.5, color: 'primary.main' }}>
              <CustomLink to='/'>Cancel</CustomLink>
            </Box>
          </Box>
        </FormWrap>
      </Container>
    </ForgotPasswordSection>
  );
}
