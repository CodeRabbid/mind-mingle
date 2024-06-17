import { Link } from "react-router-dom";
import React from "react";
import { useLogoutMutation, useMeQuery } from "./generated/graphql";
import { setAccessToken } from "./accessToken";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Header.css";
import { FaArrowTrendUp, FaRegHourglassHalf, FaPlus } from "react-icons/fa6";

const Header: React.FC = () => {
  const { data, loading } = useMeQuery();
  const [logout, { client }] = useLogoutMutation();

  let body: any = null;

  if (loading) {
    body = <div>loading...</div>;
  } else if (data && data.me) {
    body = (
      <Typography style={{ padding: "5px", color: "white" }}>
        {" "}
        {data.me.email}
      </Typography>
    );
  } else {
    body = "";
  }

  return (
    <header>
      <div id="header">
        <div>
          <Link to="/">
            <Button style={{ color: "white" }}>
              <FaRegHourglassHalf /> &nbsp;Recent posts
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/posts">
            <Button style={{ color: "white" }}>
              <FaArrowTrendUp />
              &nbsp; Trending
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/add-post">
            <Button style={{ color: "white" }}>
              <FaPlus />
              Add Post
            </Button>
          </Link>
        </div>
        {!data && (
          <div>
            <div style={{ float: "left" }}>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
            <div style={{ float: "left" }}>
              <Link to="/login">Login</Link>
            </div>
          </div>
        )}
        <div>
          <div style={{ float: "left" }}>{body}</div>
          <div style={{ float: "left" }}>
            {!loading && data && data.me && (
              <Button
                style={{ color: "white" }}
                onClick={async () => {
                  await logout();
                  setAccessToken("");
                  client.resetStore();
                }}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
