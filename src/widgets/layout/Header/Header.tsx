import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '@widgets/cart/CartIcon';
import { ROUTES } from '@shared/config/routes';
import { StyledHeader, StyledHeaderContent, StyledActions } from '@widgets/layout/Header/styles';

interface HeaderProps {
  extra?: ReactNode;
}

export const Header = ({ extra }: HeaderProps) => (
  <StyledHeader>
    <StyledHeaderContent>
      <Link to={ROUTES.HOME}>
        <span>Logo</span>
      </Link>
    </StyledHeaderContent>
    <StyledActions>
      {extra}
      <CartIcon />
    </StyledActions>
  </StyledHeader>
);
