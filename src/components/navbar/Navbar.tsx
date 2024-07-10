import NavItem from "./NavItem.tsx";
import { Items } from "../../data.ts";

export default function Navbar() {
  return (
    <ul className="bg-gray-900 text-white relative h-20 items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1 className="sm:text-2xl lg:text-4xl">ENCODER</h1>
      <div className="flex justify-end">
        {Items.map((item) => (
          <NavItem key={item.name} navItem={item} />
        ))}
      </div>
    </ul>
  );
}
