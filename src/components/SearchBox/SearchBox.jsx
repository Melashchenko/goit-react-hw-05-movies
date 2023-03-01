import PropTypes from 'prop-types';

import { useState } from 'react';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useState('');

  const handleChange = e => {
    setSearchParams(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchParams.trim() === '') {
      alert('Try again');
      return;
    }

    onSubmit(searchParams);
    setSearchParams('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autocomplete="off"
        autoFocus
        name="searchParams"
        placeholder="Search movies"
        value={searchParams}
        onChange={handleChange}
      />
      <SearchFormButton type="submit">
        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
      </SearchFormButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
