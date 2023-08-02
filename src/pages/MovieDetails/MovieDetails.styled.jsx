import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMovieDetails = styled.div`
  padding: 10px;
`;

export const ButtonBack = styled(Link)`
  display: flex;
  width: 100px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin: 6px auto 16px 16px;
  padding: 2px 10px;

  cursor: pointer;
  outline: none;
  color: #4056b4;
  border: 2px solid #4056b4;
  border-radius: 20px;

  &:hover,
  &:focus {
    color: #ff6b0a;
    border: 2px solid #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    width: 90px;
    height: 20px;
    padding: 2px 8px;
    margin: 2px auto 12px 14px;

    border-radius: 16px;
  }

  @media (max-width: 767.98px) {
    width: 80px;
    height: 18px;
    padding: 0px 4px;
    margin: 0px auto 6px 10px;

    border-radius: 12px;
  }
`;

export const ButtonBackText = styled.span`
  margin-left: 5px;

  font-size: 20px;
  line-height: 1.2;

  @media (max-width: 1023.98px) {
    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    margin-bottom: 2px;
  }
`;

export const ErrorTextMovieDetails = styled.p`
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

export const ListAdditionalDescr = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: inside;
  gap: 12px;

  @media (max-width: 1023.98px) {
    gap: 8px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
  }
`;

export const ListAdditionalDescrItem = styled.li`
  line-height: 0.6;
  color: #4056b4;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  &::marker {
    margin-right: 8px;
  }
`;

export const ListAdditionalDescrNav = styled(NavLink)`
  font-size: 18px;

  @media (max-width: 1023.98px) {
    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;
