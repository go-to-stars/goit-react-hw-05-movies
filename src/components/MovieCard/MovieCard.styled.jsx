import styled from 'styled-components';

export const MovieCardBox = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1023.98px) {
    gap: 16px;
  }

  @media (max-width: 767.98px) {
    gap: 8px;
  }
`;

export const BoxImg = styled.div`
  width: 300px;
  height: 400px;
  margin-bottom: 20px;

  @media (max-width: 1023.98px) {
    width: 200px;
    height: 300px;
    margin-bottom: 15px;
  }

  @media (max-width: 767.98px) {
    width: 100px;
    height: 180px;
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const BoxDescription = styled.div`
  width: 800px;

  @media (max-width: 1919.98px) {
    width: 620px;
  }

  @media (max-width: 1023.98px) {
    width: 520px;
  }

  @media (max-width: 767.98px) {
    width: 290px;
  }

  @media (max-width: 424.98px) {
    width: 200px;
  }
`;

export const DescriptionTitle = styled.h2`
  margin-bottom: 12px;

  font-size: 24px;

  @media (max-width: 1023.98px) {
    margin-bottom: 8px;

    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 4px;

    font-size: 12px;
  }
`;

export const DescriptionText = styled.p`
  margin-bottom: 24px;

  font-size: 18px;

  @media (max-width: 1023.98px) {
    margin-bottom: 20px;

    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 16px;

    font-size: 8px;
  }
`;

export const DescriptionSubTitle = styled.h3`
  margin-bottom: 12px;

  font-size: 20px;

  @media (max-width: 1023.98px) {
    margin-bottom: 8px;

    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 4px;

    font-size: 10px;
  }
`;
