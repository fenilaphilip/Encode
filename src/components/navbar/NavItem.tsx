import React, { useContext } from "react";
import { EncodeContext } from "../../store/EncodeContext.tsx";

type NavItemProps = {
  id: number;
  name: string;
};

const NavItem: React.FC<{ navItem: NavItemProps; click: () => void }> = (
  props
) => {
  const EncodeCtx = useContext(EncodeContext);

  function handleClick(name: string) {
    props.click();
    EncodeCtx.showTab(name);
  }

  return (
    <li key={props.navItem.id}>
      <a className="md:p-4 py-2 block hover:text-blue-300" href="#">
        <button onClick={() => handleClick(props.navItem.name)}>
          {props.navItem.name}
        </button>
      </a>
    </li>
  );
};
export default NavItem;
