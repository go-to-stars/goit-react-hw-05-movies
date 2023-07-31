import styled from '@emotion/styled';

export const ListCast = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  align-content: center;
  grid-template-columns: 200px 200px 200px 200px;
  grid-gap: 16px;
  margin-top: 15px;
  padding-bottom: 24px;
  list-style: none;

  @media (max-width: 1023.98px) {
    grid-template-columns: 200px 200px 200px;
    grid-gap: 12px;
    padding-bottom: 20px;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 200px 200px;
    grid-gap: 8px;
    padding-bottom: 16px;
  }

  @media (max-width: 424.98px) {
    grid-template-columns: 200px;
    grid-gap: 8px;
    padding-bottom: 16px;
  }
`;

export const ListCastItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
  align-items: center;
  overflow: hidden;

  text-overflow: ' [..]';
  text-align: start;

  box-shadow: 0px 1px 6px rgba(64, 86, 180, 0.08),
    0px 1px 1px rgba(64, 86, 180, 0.16), 0px 2px 1px rgba(64, 86, 180, 0.08);
  border-radius: 0px 0px 4px 4px;
`;

export const ErrorTextCast = styled.p`
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

export const BoxImg = styled.div`
  width: 200px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  @media (max-width: 1023.98px) {
    width: 200px;
    height: 300px;
    margin-bottom: 15px;
  }

  @media (max-width: 767.98px) {
    width: 200px;
    height: 300px;
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextCast = styled.p`
  margin: 0;

  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 1023.98px) {
    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    font-size: 12px;
  }
`;

export const TextCastInfo = styled.p`
  margin-top: 10px;

  font-size: 16px;
  text-align: center;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    font-size: 12px;
  }
`;
