import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 8px;
  list-style: inside;

  @media (max-width: 1023.98px) {
    gap: 6px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
  }
`;

export const ListItem = styled.li`
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
