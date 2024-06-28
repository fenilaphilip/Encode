import React from "react";

type NavItemProps = {
  id: number;
  name: string;
};

const NavItem: React.FC<{ navItem: NavItemProps }> = (props) => {
  return (
    <li key={props.navItem.id}>
      <a>
        <button
        //  onClick={() => handleClick(props.navItem.name)}
        >
          {props.navItem.name}
        </button>
      </a>
    </li>
  );
};
export default NavItem;
