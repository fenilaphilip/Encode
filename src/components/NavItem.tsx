import React, { useContext } from "react";
import { EncodeContext } from "../store/EncodeContext.tsx";

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
    <li key={props.navItem.id}>
      <a>
        <button onClick={() => handleClick(props.navItem.name)}>
          {props.navItem.name}
        </button>
      </a>
    </li>
  );
};
export default NavItem;
