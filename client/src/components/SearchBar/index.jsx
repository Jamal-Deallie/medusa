import { useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import {
  SearchBarSection,
  Search,
  StyledInputBase,
  SearchIconWrapper,
  Heading,
  Form,
  FormWrapper,
  CloseSearchBtn,
  SubmitBtn,
} from './styles';

export default function SearchBar({
  handleSearchBar,
  openSearch,
  setOpenSearch,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = e => {
    const query = e.target.value.replaceAll(' ', '&');
    setSearchTerm(query);
  };

  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/search?term=${searchTerm}`);
    setOpenSearch(false);
  }

  return (
    <SearchBarSection $open={openSearch}>
      <CloseSearchBtn onClick={handleSearchBar}>
        <CloseIcon color='primary.main' />
      </CloseSearchBtn>
      <FormWrapper>
        <Heading>Search</Heading>
        <Form onSubmit={handleSubmit} type='POST'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color='primary.main' sx={{ fontSize: 25 }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search Our Plants'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
            <SubmitBtn type='submit'></SubmitBtn>
          </Search>
        </Form>
      </FormWrapper>
    </SearchBarSection>
  );
}
