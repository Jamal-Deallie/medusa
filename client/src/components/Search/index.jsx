import React, { useState } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';

import {
  SearchSection,
  SearchBar,
  StyledInputBase,
  SearchIconWrapper,
  Heading,
  Form,
  FormWrapper,
  CloseSearchBtn,
  SubmitBtn,
} from './styles';
import { Drawer, Button, Typography, Box } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function Search() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    setOpen(open => !open);
  }

  const handleSearch = e => {
    const query = e.target.value.replaceAll(' ', '&');
    setSearchTerm(query);
  };

  function handleSubmit(e) {
    e.preventDefault();
    //set search
    handleClick();
    navigate(`/search?term=${searchTerm}`);
    //navigate to search page
  }
  return (
    <>
      <div onClick={handleClick}>
        <Typography
          color='primary.main'
          sx={{
            fontSize: '1.6rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontFamily: 'muli, sans-serif',
          }}>
          Search
        </Typography>
      </div>
      <Drawer anchor='top' open={open} onClose={handleClick}>
        <Box>
          <SearchSection>
            <FormWrapper>
              <Heading>Search</Heading>
              <Form onSubmit={handleSubmit} type='POST'>
                <SearchBar>
                  <SearchIconWrapper>
                    <SearchIcon
                      color='primary.main'
                      sx={{ fontSize: 25, color: 'secondary.main' }}
                    />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder='Search Our Plants'
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleSearch}
                  />
                  <SubmitBtn type='submit'></SubmitBtn>
                </SearchBar>
                <CloseSearchBtn onClick={handleClick}>
                  <CloseIcon sx={{ color: 'secondary.main', fontSize: 25 }} />
                </CloseSearchBtn>
              </Form>
            </FormWrapper>
          </SearchSection>
        </Box>
      </Drawer>
    </>
  );
}
