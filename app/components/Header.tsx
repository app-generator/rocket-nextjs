"use client";
import DesktopNav from "./Menus/DesktopNav";
import MobileNav from "./Menus/MobileNav";

const Header = () => {
  return (
    <header>
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Header;
