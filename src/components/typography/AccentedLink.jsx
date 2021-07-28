import React from "react";
import { Link } from "react-router-dom";

const AccentedLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="font-bold hover:text-yellow-200 ml-1 transition duration-500"
    >
      {text}
    </Link>
  );
};

export default AccentedLink;
