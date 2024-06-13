import { Link } from "react-router-dom";
import React from "react";
import { useMeQuery } from "./generated/graphql";

const Header: React.FC = () => {
  const { data, error } = useMeQuery({ fetchPolicy: "network-only" });
  console.log(data);

  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/bye">Bye</Link>
      </div>
      {data && data.me ? (
        <div>You are logged in as {data.me.email}</div>
      ) : (
        <div>not logged in</div>
      )}
    </header>
  );
};

export default Header;
