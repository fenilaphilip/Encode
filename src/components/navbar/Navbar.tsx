import NavItem from "./NavItem.tsx";
import { Items } from "../../data.ts";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    console.log("Toggling menu");
    setShowMenu(!showMenu);
  }
  function hideMenu() {
    setShowMenu(false);
  }
  return (
    <nav
      className="
      flex flex-wrap items-center justify-between 
      w-full py-4 md:py-0 px-4 text-lg text-white bg-gray-900
      "
    >
      <div>
        <a href="#">
          <h1 className="lg:text-4xl px-4"> ENCODER</h1>
        </a>
      </div>
      <svg
        xmlns="<http://www.w3.org/2000/svg>"
        id="menu-button"
        onClick={toggleMenu}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 cursor-pointer md:hidden block"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div
        id="menu"
        className={`${
          showMenu ? "" : "hidden"
        } w-full md:flex md:items-center md:w-auto`}
      >
        <ul className="text-base pt-4 md:flex md:justify-between md:pt-0">
          {Items.map((item) => (
            <NavItem key={item.name} navItem={item} click={hideMenu} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
