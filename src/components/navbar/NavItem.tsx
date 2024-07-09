import React, { useContext } from "react";
import { EncodeContext } from "../../store/EncodeContext.tsx";

type NavItemProps = {
  id: number;
  name: string;
};

const NavItem: React.FC<{ navItem: NavItemProps }> = (props) => {
  const EncodeCtx = useContext(EncodeContext);

  function handleClick(name: string) {
    EncodeCtx.showTab(name);
  }

  return (
    <li
      key={props.navItem.id}
      className="hover:bg-gray-400 hover:text-white'
    ' rounded-md px-3 py-2 text-base font-medium"
    >
      <a>
        <button onClick={() => handleClick(props.navItem.name)}>
          {props.navItem.name}
        </button>
      </a>
    </li>
  );
};
export default NavItem;
