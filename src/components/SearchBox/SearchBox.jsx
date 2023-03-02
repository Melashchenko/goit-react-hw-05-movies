import PropTypes from 'prop-types';

import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBox.styled';

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchFormInput
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies"
        value={value}
        onChange={e => onChange(e.target.value)}
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
