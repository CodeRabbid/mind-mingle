import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostMutation } from "../generated/graphql";
import { User } from "../classes/User";
import "./Posts.css";
import { TextField } from "@mui/material";

const Post: React.FC = () => {
  const { id } = useParams();
  const [getPost] = useGetPostMutation();
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState(new User());

  useEffect(() => {
    (async () => {
      const { data } = await getPost({ variables: { postId: id! } });
      setContent(data?.getPost.content!);
      setAuthor(data?.getPost.author!);
      setSubject(data?.getPost.subject!);
    })();
  }, []);

  return (
    <div>
      <div className="username-container">Author: {author.email}</div>
      <div className="subject-container">{subject}</div>
      <div style={{ whiteSpace: "pre-line" }} className="post-box">
        {content}
      </div>
      <TextField fullWidth placeholder="Commet..."></TextField>
    </div>
  );
};

export default Post;
