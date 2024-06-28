import NavItem from "./NavItem.tsx";
import { navbarItem } from "../data.ts";

export default function Navbar() {
  return (
    <ul className="navbar">
      {navbarItem.map((item) => (
        <NavItem key={item.name} navItem={item} />
      ))}
    </ul>
  );
}
