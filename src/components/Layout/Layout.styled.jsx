import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../img/logo.svg';

export const ContainerLayout = styled.div`
  padding: 0px 0;
`;

export const Logotype = styled(Logo)`
  width: 200px;
  height: 50px;

  @media (max-width: 1023.98px) {
    width: 150px;
    height: 40px;
  }

  @media (max-width: 767.98px) {
    width: 110px;
    height: 30px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 30px;

  box-shadow: 0px 1px 3px 0px rgba(64, 86, 180, 0.2),
    0px 1px 1px 0px rgba(64, 86, 180, 0.14),
    0px 2px 1px -1px rgba(64, 86, 180, 0.12);

  @media (max-width: 1023.98px) {
    padding: 3px 20px;
  }

  @media (max-width: 767.98px) {
    padding: 2px 5px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;

  list-style: none;

  @media (max-width: 1023.98px) {
    gap: 20px;
  }

  @media (max-width: 767.98px) {
    gap: 10px;
  }
`;

export const NavListItem = styled.li`
  font-size: 28px;
  text-transform: capitalize;
  color: #4056b4;

  border: 2px solid #fff;
  border-radius: 16px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
`;

export const Header = styled.header``;

export const Main = styled.main`
  box-shadow: 0px 1px 3px 0px rgba(64, 86, 180, 0.2),
    0px 1px 1px 0px rgba(64, 86, 180, 0.14),
    0px 2px 1px -1px rgba(64, 86, 180, 0.12);
`;

export const Footer = styled.footer`
  padding: 20px 0;

  font-size: 20px;
  text-align: center;
  color: #4056b4;
  box-shadow: 0px 1px 3px 0px rgba(64, 86, 180, 0.2),
    0px 1px 1px 0px rgba(64, 86, 180, 0.14),
    0px 2px 1px -1px rgba(64, 86, 180, 0.12);

  @media (max-width: 1023.98px) {
    padding: 15px 0;

    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    padding: 10px 0;

    font-size: 12px;
  }
`;
