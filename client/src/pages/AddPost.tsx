import { useState } from "react";
import { useAddPostMutation } from "../generated/graphql";
import Textarea from "@mui/joy/Textarea";
import { Button, TextField } from "@mui/material";

const AddPost: React.FC = () => {
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [addPost] = useAddPostMutation();
  return (
    <div>
      <TextField
        fullWidth
        size="small"
        placeholder="Subject"
        style={{ margin: "10px 0px 5px 0px" }}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      ></TextField>
      <Textarea
        placeholder="Write your post here"
        style={{ margin: "5px 0px 10px 0px" }}
        id="textarea"
        minRows={7}
        onChange={(e) => {
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
                  subject,
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
