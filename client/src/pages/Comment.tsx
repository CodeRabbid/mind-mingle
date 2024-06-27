import { useState } from "react";
import { PostComment } from "../classes/PostComment";
import { useGetCommentsMutation } from "../generated/graphql";
import { TextField } from "@mui/material";

interface IComment {
  id: number;
  content: string;
}

interface IProps {
  comment: IComment;
}

const Comment: React.FC<IProps> = ({ comment }) => {
  const [getComments] = useGetCommentsMutation();
  const [commentsComments, setCommentsComments] = useState<
    Array<Array<PostComment>>
  >([]);
  return (
    <div
      className="comment-box"
      onClick={async () => {
        const { data } = await getComments({
          variables: { commentId: comment.id },
        });
        let commentsCommentsCopy = [...commentsComments];
        commentsCommentsCopy[comment.id] = data?.getComments!;
        setCommentsComments(commentsCommentsCopy);
      }}
    >
      {comment.content}
      {comment.id}

      {commentsComments[comment.id] &&
        commentsComments[comment.id].map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      <TextField fullWidth placeholder="Add a comment"></TextField>
    </div>
  );
};

export default Comment;
