import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const ContainerMovies = styled.div`
  padding: 10px;
`;

export const ErrorTextMovies = styled(ErrorMessage)`
  margin: 0;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;
