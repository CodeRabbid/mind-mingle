import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCommentsMutation,
  useGetPostMutation,
} from "../generated/graphql";
import { User } from "../classes/User";
import "./Posts.css";
import "./Post.css";
import { TextField } from "@mui/material";
import { PostComment } from "../classes/PostComment";
import Comment from "./Comment";

const Post: React.FC = () => {
  const { id } = useParams();
  const [getPost] = useGetPostMutation();
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState(new User());
  const [comments, setComments] = useState<Array<PostComment>>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getPost({ variables: { postId: id! } });
      setContent(data?.getPost.content!);
      setAuthor(data?.getPost.author!);
      setSubject(data?.getPost.subject!);
      if (data?.getPost.comments) {
        setComments(data?.getPost.comments);
      }
    })();
  }, []);

  return (
    <div>
      <div className="username-container">Author: {author.email}</div>
      <div className="subject-container">{subject}</div>
      <div style={{ whiteSpace: "pre-line" }} className="post-box">
        {content}
      </div>
      <TextField fullWidth placeholder="Add a comment"></TextField>
      <div className="comments-label">Comments:</div>
      {comments.map((comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Post;
