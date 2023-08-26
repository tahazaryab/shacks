import { ReactNode } from 'react';
import { NavbarDefault } from '../navbar';
import { FooterWithLogo } from '../footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <NavbarDefault />
      {children}
      <FooterWithLogo />
    </>
  );
};

export default Layout;
