import { useState } from "react";
import { useAddPostMutation } from "../generated/graphql";

const AddPost: React.FC = () => {
  const [content, setContent] = useState("");
  const [addPost] = useAddPostMutation();
  return (
    <div>
      <textarea
        id="textarea"
        rows={4}
        cols={50}
        onChange={(e) => {
          e.preventDefault();
          setContent(e.target.value);
        }}
      ></textarea>
      <div>
        <button
          onClick={async () => {
            const response = await addPost({
              variables: {
                content,
              },
            });
            console.log(response);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default AddPost;
