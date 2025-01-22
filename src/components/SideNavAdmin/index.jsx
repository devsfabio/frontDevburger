import { navLink } from './navLinks';
import Logo from '../../assets/logo-login.svg';
import { SignOut } from '@phosphor-icons/react';
import { Container, Footer, NavLinkContainer, NavLink } from './styles';
import { useResolvedPath } from 'react-router-dom';

import { userUser } from '../../hooks/UserContext';

export function SideNavAdmin() {
  const { logout } = userUser();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <img src={Logo} alt="Hamburger Logo DevBurger" />
      <NavLinkContainer>
        {navLink.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to="/login" onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
