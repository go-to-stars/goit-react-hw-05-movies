import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Copyright © 2023. All rights reserved.</Footer>
    </ContainerLayout>
  );
}; // функція Layout повертає для рендеру розмітку на головну сторінку основне тіло сайту (хедер з навігацією по сторінкам, мейн та футер). Весь інший контент рендериться в Outlet

export default Layout; // дефолтний експорт функції Layout
