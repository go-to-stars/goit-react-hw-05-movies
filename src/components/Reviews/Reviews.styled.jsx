import styled from '@emotion/styled';

export const ListReviews = styled.ul`
  margin-top: 10px;
  list-style: none;
`;

export const ListReviewsItem = styled.li`
  margin-top: 10px;
  min-height: 94px;

  @media (max-width: 1023.98px) {
    min-height: 80px;
  }

  @media (max-width: 767.98px) {
    min-height: 64px;
  }
`;

export const ErrorTextReviews = styled.p`
  margin-top: 10px;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;

export const ErrorTextReview = styled.p`
  margin-top: 10px;
  text-align: center;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;

export const AutorReview = styled.h2`
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

export const TextReview = styled.p`
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

export const ReviewCard = styled.div``;

export const BoxImg = styled.div`
  width: 60px;
  height: 90px;
  float: left;
  margin-right: 20px;
  margin-bottom: 4px;

  @media (max-width: 1023.98px) {
    width: 50px;
    height: 75px;
    margin-right: 16px;
  }

  @media (max-width: 767.98px) {
    width: 40px;
    height: 60px;
    margin-right: 12px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
