import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPostMutation } from "../generated/graphql";
import { User } from "../classes/User";

const Post: React.FC = () => {
  const { id } = useParams();
  const [getPost] = useGetPostMutation();
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(new User());

  useEffect(() => {
    (async () => {
      const { data } = await getPost({ variables: { postId: id! } });
      setContent(data?.getPost.content!);
      setAuthor(data?.getPost.author!);
    })();
  }, []);

  return (
    <div>
      {author.email}
      {content}
    </div>
  );
};

export default Post;
