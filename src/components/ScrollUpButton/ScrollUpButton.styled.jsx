import styled from '@emotion/styled';

export const Button = styled.div`
  position: fixed;
  bottom: 8%;
  right: 8%;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: none;
  color: #4056b4;
  background-color: #fff;
  border: 2px solid #4056b4;
  border-radius: 50%;
  opacity: 1;
  z-index: 5;
  pointer-events: all;

  &:hover,
  &:focus {
    color: #ff6b0a;
    border: 2px solid #ff6b0a;
  }

  @media (max-width: 1439.98px) {
    right: 2%;
  }

  @media (max-width: 1023.98px) {
    width: 30px;
    height: 30px;
    right: 2%;
  }

  @media (max-width: 767.98px) {
    width: 24px;
    height: 24px;
    right: 1%;
  }

  @media (max-width: 424.98px) {
    right: 5%;
  }
`;
