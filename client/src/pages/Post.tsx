import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddPostCommentMutation,
  useGetCommentsMutation,
  useGetPostMutation,
} from "../generated/graphql";
import { User } from "../classes/User";
import "./Posts.css";
import "./Post.css";
import { Button, TextField } from "@mui/material";
import { PostComment } from "../classes/PostComment";
import Comment from "./Comment";

const Post: React.FC = () => {
  const { id } = useParams();
  const [getPost] = useGetPostMutation();
  const [addPostComment] = useAddPostCommentMutation();
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [author, setAuthor] = useState(new User());
  const [comments, setComments] = useState<Array<PostComment>>([]);
  const [newComment, setNewComment] = useState("");

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

  const handleCommentClick = async () => {
    const result = await addPostComment({
      variables: { postId: Number(id), content: newComment },
    });
    const { data } = await getPost({ variables: { postId: id! } });
    setComments(data?.getPost.comments!);
  };

  return (
    <div>
      <div className="username-container">Author: {author.email}</div>
      <div className="subject-container">{subject}</div>
      <div style={{ whiteSpace: "pre-line" }} className="post-box">
        {content}
      </div>
      <TextField
        fullWidth
        placeholder="Add a comment"
        onChange={(e) => setNewComment(e.target.value)}
      ></TextField>
      <Button onClick={handleCommentClick}>Comment</Button>
      <div className="comments-label">Comments:</div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Post;
