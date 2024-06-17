import { Link } from "react-router-dom";
import React from "react";
import { useLogoutMutation, useMeQuery } from "./generated/graphql";
import { setAccessToken } from "./accessToken";

const Header: React.FC = () => {
  const { data, loading } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();

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
        <Link to="/posts">Posts</Link>
      </div>
      <div>
        <Link to="/add-post">Add Post</Link>
      </div>
      <div>
        {!loading && data && data.me && (
          <button
            onClick={async () => {
              await logout();
              setAccessToken("");
              client.resetStore();
            }}
          >
            Logout
          </button>
        )}
      </div>
      {body}
    </header>
  );
};

export default Header;
