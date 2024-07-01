import NavItem from "./NavItem.tsx";
import { Items } from "../data.ts";

export default function Navbar() {
  return (
    <ul className="navbar">
      <h1>ENCODER</h1>
      {Items.map((item) => (
        <NavItem key={item.name} navItem={item} />
      ))}
    </ul>
  );
}
