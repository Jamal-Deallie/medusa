import { useState } from 'react';
import {
  NewsLetterContent,
  NewsLetterHeader,
  Text,
  InputIconWrapper,
  StyledInputBase,
  NewsLetterSection,
  SubmitBtn,
  EmailInput,
} from './styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNewsLetterMutation } from '../../features/newsletter/newsLetterSlice';
import { Typography, Box } from '@mui/material';

export default function NewsLetterInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [newsLetter, { isSuccess }] = useNewsLetterMutation();

  const handleChange = event => {
    setEmail(event.target.value);
  };

  if (isSuccess) {
    setEmail('');
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (email) {
      try {
        await newsLetter({
          email,
        }).unwrap();
      } catch (err) {
        setError('Submission Failed');
      }
    }
  };

  return (
    <NewsLetterSection>
      <Box sx={{ my: 2, textAlign: 'center' }}>
        {error && (
          <Typography variant='body2' sx={{ color: 'secondary.main' }}>
            {error}
          </Typography>
        )}
      </Box>
      <NewsLetterContent onSubmit={handleSubmit}>
        <NewsLetterHeader>Get the Dirt</NewsLetterHeader>
        <Text>
          Stay in the loop with special offers, plant-parenting tips, and more.
        </Text>
        <EmailInput>
          <StyledInputBase
            placeholder='Enter your email'
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChange}
          />
          <InputIconWrapper>
            <ArrowRightAltIcon
              color='primary.main'
              sx={{ fontSize: 25, color: 'secondary.main' }}
            />
          </InputIconWrapper>
          <SubmitBtn type='submit'></SubmitBtn>
        </EmailInput>
      </NewsLetterContent>
    </NewsLetterSection>
  );
}
