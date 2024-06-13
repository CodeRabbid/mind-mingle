import { Link } from "react-router-dom";
import React from "react";
import { useMeQuery } from "./generated/graphql";

const Header: React.FC = () => {
  const { data, loading } = useMeQuery();

  let body: any = null;

  if (loading) {
    body = <div>loading...</div>;
  } else if (data && data.me) {
    body = <div>You are logged in as {data.me.email}</div>;
  } else {
    body = <div>not logged in</div>;
  }

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
      {body}
    </header>
  );
};

export default Header;
