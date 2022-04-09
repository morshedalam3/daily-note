import { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../action/posts";
import "./AddNote.css";
const AddNote = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    creator: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setPostData({ title: "", description: "", creator: "", selectedFile: "" });
  };
  const handleSubmit = () => {
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>
          {currentId ? `Editing "${post.title}"` : "Creating a Note"}
        </span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25 }}
            name="title"
            label="Write a title"
            value={postData.title}
            variant="outlined"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="creator"
            style={{ marginBottom: 25 }}
            label="Write Your Name"
            variant="outlined"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="description"
            style={{ marginBottom: 25 }}
            label="Write a description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
          <div className="fileInput">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <br />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
