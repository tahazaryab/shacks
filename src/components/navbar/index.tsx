import React from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';

import { useNavigate } from 'react-router-dom';

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navigate = useNavigate();
  const handleClick = (path: string) => navigate(path);

  const navList = (
    <ul className="border-none mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          type="button"
          className="flex items-center"
          onClick={() => handleClick('/home')}
        >
          <p className="text-black hover:font-bold text-lg">Home</p>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          type="button"
          className="flex items-center"
          onClick={() => handleClick('/my-reports')}
        >
          <p className="text-black hover:font-bold text-lg">My Reports</p>
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          type="button"
          className="flex items-center"
          onClick={() => handleClick('/submit-report')}
        >
          <p className="text-black hover:font-bold text-lg">Submit a Report</p>
        </button>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="border-none mx-auto max-w-screen-xl py-0 px-4 lg:px-6">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div>
          <img
            src="assets/scotia-logo-2.png"
            alt="Logo"
            className="cursor-pointer h-[120px] w-auto"
          />
        </div>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="lg"
          className="hidden lg:inline-block"
          onClick={() => {
            handleClick('/');
          }}
        >
          <span className="text-black hover:font-bold text-lg">Log Out</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Log Out</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
