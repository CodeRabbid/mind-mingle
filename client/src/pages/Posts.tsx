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
            <div key={post.id} className="post-box">
              {post.content}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;
