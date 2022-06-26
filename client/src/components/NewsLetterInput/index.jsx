import { useState } from 'react';
import {
  NewsLetterContent,
  NewsLetterHeader,
  Text,
  InputIconWrapper,
  StyledInputBase,
  NewsLetterSection,
  EmailInput,
} from './styles';
import { Box } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNewsLetterMutation } from '../../features/newsletter/newsLetterSlice';

export default function NewsLetterInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [newsLetter, { isSuccess }] = useNewsLetterMutation();

  const handleChange = event => {
    setEmail(event.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();

    if (email) {
      try {
        await newsLetter({
          email,
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
    <NewsLetterSection>
      <NewsLetterContent>
        <NewsLetterHeader>Sign Up Now</NewsLetterHeader>
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
          {/* <SubmitBtn type='submit'></SubmitBtn> */}
        </EmailInput>
      </NewsLetterContent>
    </NewsLetterSection>
  );
}
