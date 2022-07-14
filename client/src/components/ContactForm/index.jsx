import React, { useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import {
  CustomInput,
  Text,
  ContactFormWrap,
  Heading,
  CustomButton,
} from './styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useContactUsMutation } from '../../features/contact/contactSlice';

export default function ContactForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formValue, setFormValue] = useState({
    email: '',
    name: '',
    inquiry: '',
  });

  const [error, setError] = useState('');
  const from = location.state?.from?.pathname || '/';
  const [contactus, { isSuccess }] = useContactUsMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValue(prevState => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  if (isSuccess) {
    navigate(from, { replace: true });
  }

  const canSave = [formValue.name, formValue.email, formValue.message].every(
    Boolean
  );

  const handleSubmit = async e => {
    e.preventDefault();

    if (canSave) {
      try {
        await contactus({
          ...formValue,
        });
      } catch (err) {
        if (!err?.originalStatus) {
          setError('Contact Form Failed to Send');
        }
      }
    }
  };

  return (
    <ContactFormWrap>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {error && error.message && (
          <Box sx={{ my: 2, textAlign: 'center' }}>
            {error && (
              <Typography variant='body2' sx={{ color: 'secondary.main' }}>
                {error}
              </Typography>
            )}
          </Box>
        )}
        <Heading variant='h2'>Contact Us</Heading>

        <Box sx={{ mt: 3 }} component='form' onSubmit={handleSubmit}>
          <Grid container rowSpacing={5}>
            <Grid item xs={12}>
              <CustomInput
                name='name'
                fullWidth
                id='outlined-required'
                label='Name'
                onChange={handleChange}
                value={formValue.name}
                inputProps={{
                  autoComplete: 'off',
                }}
                autoFocus
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
                onChange={handleChange}
                value={formValue.email}
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
                multiline
                rows={8}
                fullWidth
                type='text'
                id='message'
                label='Message'
                name='message'
                onChange={handleChange}
                value={formValue.message}
                inputProps={{
                  autoComplete: 'off',
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <CustomButton type='submit' fullWidth>
            Submit
          </CustomButton>

          <Grid item xs={12} sx={{ textAlign: 'center', pt: 5.5 }}>
            <Link to='/'>
              <Text variant='body2'>Cancel</Text>
            </Link>
          </Grid>
        </Box>
      </Box>
    </ContactFormWrap>
  );
}
