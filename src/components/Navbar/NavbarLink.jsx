import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ title, path, selected }) => {
  return (
    <Link
      className={`text-2xl py-2 text-center block ${
        selected ? "text-white bg-secondary" : "text-black"
      }`}
      to={path}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
