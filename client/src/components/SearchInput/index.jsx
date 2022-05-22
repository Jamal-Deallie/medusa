import { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
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

export default function SearchInput({
  handleClick,
  toggleSearch,
  setToggleSearch,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  console.log({ search: toggleSearch });
  const navigate = useNavigate();
  const location = useLocation();

  let [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = location;
  console.log(location);
  console.log(pathname);
  const query = useQuery();
  const searchQuery = query.get('term');

  const handleSearch = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  function searchProducts() {
    if (searchTerm.trim()) {
    } else {
      navigate.push('/');
    }
  }
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchProducts();
    // navigate(`/search?term=${searchTerm}`);
  }
  return (
    <SearchBarSection>
      <FormWrapper>
        <Heading>Who Searched Ya</Heading>
        <Form onSubmit={handleSubmit} method='POST'>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color='secondary.main' sx={{ fontSize: 25 }} />
            </SearchIconWrapper>
            <StyledInputBase
              type='search'
              value={searchTerm}
              placeholder='Search Our Plants'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
            />
            <SubmitBtn type='submit'></SubmitBtn>
          </Search>
          <CloseSearchBtn onClick={handleClick} type='button'>
            <CloseIcon color='primary.main' />
          </CloseSearchBtn>
        </Form>
      </FormWrapper>
    </SearchBarSection>
  );
}
