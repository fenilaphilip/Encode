import React from "react";

type NavItemProps = {
  id: number;
  name: string;
  link: string;
};

const NavItem: React.FC<{ navItem: NavItemProps }> = (props) => {
  return (
    <li key={props.navItem.id}>
      <a href={props.navItem.link}>{props.navItem.name}</a>
    </li>
  );
};
export default NavItem;
