import axios from "axios";
import { useState } from "react";

function PostCreate() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  async function handleSubmit() {
    event.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    
    const response = await axios.post(
      `http://localhost:8000/users/posts/post/create`,
      {
        title,
        content
      },
      {
        headers: {
            "Authorization" : token,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Enter a title: </label>
      <input type="text" name="title" id="title" required maxLength={50} onChange={(e) => setTitle(e.target.value)}/>

      <label htmlFor="content">Start typing.....: </label>
      <textarea name="content" id="content" rows={15} cols={45} onChange={(e) => setContent(e.target.value)}></textarea>
      <button type="submit">submit</button>
    </form>
  );
}

export { PostCreate };
