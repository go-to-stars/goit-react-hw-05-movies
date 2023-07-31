import styled from '@emotion/styled';

export const ContainerHome = styled.div`
  padding: 20px;

  @media (max-width: 1023.98px) {
    padding: 16px;
  }

  @media (max-width: 767.98px) {
    padding: 12px;
  }
`;

export const TitleHome = styled.h1`
  margin-bottom: 15px;

  font-size: 28px;
  color: #4056b4;

  @media (max-width: 1023.98px) {
    margin-bottom: 22px;
    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 16px;
    font-size: 14px;
  }
`;

export const ListHome = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: inside;
  gap: 8px;

  @media (max-width: 1023.98px) {
    gap: 6px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
  }
`;

export const ListItemHome = styled.li`
  font-size: 20px;
  color: #4056b4;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    font-size: 12px;
  }
`;

export const ErrorTextHome = styled.p`
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
