import React from "react";
import { usePostsQuery } from "../generated/graphql";
import "./Posts.css";
import { Link } from "react-router-dom";

const Posts: React.FC = () => {
  const { data } = usePostsQuery({ fetchPolicy: "network-only" });
  return (
    <div>
      {data?.posts.map((post) => {
        return (
          <Link
            to={`/post/${post.id}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <div
              style={{ whiteSpace: "pre-line" }}
              key={post.id}
              className="listed-post-box"
            >
              {post.subject}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
