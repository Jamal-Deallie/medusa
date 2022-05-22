import React, { useState } from 'react';
import { CartWrapper, CartIcon } from './styles';
import { Drawer, Button, Typography, Box } from '@mui/material';
import { SearchInput } from '../../components';

export default function Search() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(open => !open);
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
            fontFamily: 'open Sans, sans-serif',
          }}>
          Search
        </Typography>
      </div>
      <Drawer anchor='top' open={open} onClose={handleClick}>
        <Box>
          <SearchInput handleClick={handleClick} />
        </Box>
      </Drawer>
    </>
  );
}
