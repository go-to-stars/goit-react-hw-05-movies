import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Nav,
  Logotype,
  NavList,
  NavListItem,
  ContainerLayout,
  Header,
  Main,
  Footer,
} from './Layout.styled';
// import { ReactComponent as Logo } from '../../img/logo.svg';

const Layout = () => {
  return (
    <ContainerLayout>
      <Header>
        <Nav>
          <NavLink to="" className={'link'}>
            <Logotype />
          </NavLink>
          <NavList>
            <NavListItem>
              <NavLink to="/" className={'link'}>
                HOME
              </NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/movies" className={'link'}>
                MOVIES
              </NavLink>
            </NavListItem>
          </NavList>
        </Nav>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Copyright © 2023. All rights reserved.</Footer>
    </ContainerLayout>
  );
};

export default Layout;
