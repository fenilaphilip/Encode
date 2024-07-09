import NavItem from "./NavItem.tsx";
import { Items } from "../../data.ts";

export default function Navbar() {
  return (
    <ul className=" bg-gray-900 text-white relative flex h-16 items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1>ENCODER</h1>
      {Items.map((item) => (
        <NavItem key={item.name} navItem={item} />
      ))}
    </ul>
  );
}
