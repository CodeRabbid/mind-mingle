import { useState } from "react";
import { useAddPostMutation } from "../generated/graphql";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";

const AddPost: React.FC = () => {
  const [content, setContent] = useState("");
  const [addPost] = useAddPostMutation();
  return (
    <div>
      <Textarea
        id="textarea"
        minRows={2}
        onChange={(e) => {
          e.preventDefault();
          setContent(e.target.value);
        }}
      ></Textarea>
      <div>
        <Button
          style={{ float: "right" }}
          variant="outlined"
          onClick={async () => {
            try {
              const response = await addPost({
                variables: {
                  content,
                },
              });
              console.log(response);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Post
        </Button>
      </div>
    </div>
  );
};
export default AddPost;
