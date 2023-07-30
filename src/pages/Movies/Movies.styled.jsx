import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const ContainerMovies = styled.div`
  padding: 10px;
`;

export const FormContainer = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;

  @media (max-width: 1023.98px) {
    max-width: 450px;
  }

  @media (max-width: 767.98px) {
    max-width: 300px;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  padding: 9px 10px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;

  font: inherit;
  font-size: 20px;
  line-height: 1;

  border: 2px solid #4056b4;
  outline: none;

  @media (max-width: 1023.98px) {
    padding: 8.5px 10px;

    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    padding: 8px 6px;

    font-size: 12px;
  }

  &::placeholder {
    font: inherit;
    font-size: 20px;
    line-height: 1;

    @media (max-width: 1023.98px) {
      font-size: 16px;
    }

    @media (max-width: 767.98px) {
      font-size: 12px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  //   width: 48px;
  //   height: 48px;
  align-items: center;
  justify-content: center;
  //   gap: 10px;
  border: 0;
  //   opacity: 0.6;
  //   transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: #4056b4;
  border: 2px solid #4056b4;
  padding: 15.8px 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  //   &:hover {
  //     opacity: 1;
  //   }

  &:hover,
  &:focus {
    // opacity: 1;
    color: #ff6b0a;
    border: 2px solid #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    width: 42px;
    height: 42px;
    padding: 12px 10px;
  }

  @media (max-width: 767.98px) {
    width: 36px;
    height: 36px;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
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

export const ListMovies = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  list-style: inside;
  gap: 5px;
`;

export const ListItemMovies = styled.li`
  font-size: 14px;
  color: #4056b4;
  // transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  // @media (max-width: 1023.98px) {
  //     font-size: 12px;
  //   }

  //   @media (max-width: 767.98px) {
  //     font-size: 10px;
  //   }
`;

// export const ErrorTextMovies = styled.p
//`;
//   margin: 0;

//   font-size: 14px;
//   color: red;

//   @media (max-width: 1023.98px) {
//     font-size: 12px;
//   }

//   @media (max-width: 767.98px) {
//     font-size: 10px;
//   }
// `;
