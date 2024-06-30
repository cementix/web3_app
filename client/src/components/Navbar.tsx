import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { ReactNode, useState } from "react";

const NavbarItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <li className={`mx-4 cursor-pointer ${className}`}>{children}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const navbarLinks: string[] = ["Market", "Exchange", "Tutorials", "Wallets"];
  return (
    <nav className="flex justify-between md:justify-center items-center p-4 w-full">
      <div className="flex flex-initial md:flex-[0.5] justify-between items-center gap-7 w-full">
        <img
          src={logo}
          alt="logo"
          className="w-32 cursor-pointer select-none"
        />
        <ul className="md:flex flex-row flex-initial justify-between items-center hidden text-white list-none">
          {navbarLinks.map((item, index) => (
            <NavbarItem key={item + index}>{item}</NavbarItem>
          ))}
          <li className="bg-[#2952e3] hover:bg-[#2546bd] mx-4 px-7 py-2 rounded-full cursor-pointer">
            Login
          </li>
        </ul>
        <div className="relative flex">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={28}
              className="md:hidden text-white cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <HiMenuAlt4
              fontSize={28}
              className="md:hidden text-white cursor-pointer"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}

          {toggleMenu && (
            <ul className="-top-0 -right-2 z-10 fixed flex flex-col justify-start items-end md:hidden shadow-2xl p-3 rounded-md w-[70vw] h-screen text-white animate-slide-in list-none blue-glassmorphism">
              <li className="my-2 w-full text-xl">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {navbarLinks.map((item, index) => (
                <NavbarItem className="my-2 text-lg" key={item + index}>
                  {item}
                </NavbarItem>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
