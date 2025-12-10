import { ReactNode } from 'react';
import { Header } from '@widgets/layout/Header';
import { Footer } from '@widgets/layout/Footer';
import { StyledLayout, StyledContent } from '@widgets/layout/AppLayout/styles';

interface AppLayoutProps {
  children: ReactNode;
  extra?: ReactNode;
}

export const AppLayout = ({ children, extra }: AppLayoutProps) => (
  <StyledLayout>
    <Header extra={extra} />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </StyledLayout>
);
