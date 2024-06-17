import React from "react";
import { usePostsQuery } from "../generated/graphql";
import "./Posts.css";

const Posts: React.FC = () => {
  const { data } = usePostsQuery({ fetchPolicy: "network-only" });
  return (
    <div>
      {data?.posts.map((user) => {
        return (
          <div key={user.id} className="post-box">
            {user.content}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
