import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BsSearch } from 'react-icons/bs';

import { FormContainer, Input, Button, ButtonText } from './SearchForm.styled';

const queryRegex = /^[a-zA-Zа-яА-Я]*$/; // регулярний вираз для запиту

const schema = Yup.object().shape({
  query: Yup.string()
    .matches(queryRegex, 'Query is not valid!')
    .max(50, 'Too Long!')
    .trim(),
}); // валідація полів форми

const INITIAL_STATE = {
  query: '',
}; // ініціалізація полів форми

const SearchForm = ({ formSubmit, searchQuery, inputChange }) => {
  return (
    <Formik
      initialValues={INITIAL_STATE}
      validationSchema={schema}
      onSubmit={formSubmit}
    >
      <FormContainer>
        <Input
          type="text"
          name="query"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          onChange={inputChange}
        />
        <Button type="submit">
          <BsSearch />
          <ButtonText>Search</ButtonText>
        </Button>
      </FormContainer>
    </Formik>
  );
}; // функція SearchForm повертає для рендеру розмітку компоненту SearchForm (пошуковий рядок)

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
}; // типізація (опис типів) пропсів компоненту SearchForm


export default SearchForm; // дефолтний експорт функції SearchForm
