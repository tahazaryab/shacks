import { ReactNode } from 'react';
import { NavbarDefault } from "../navbar"

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <NavbarDefault />
      {children}
    </>
  );
};

export default Layout;
