import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

function ViewPost() {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function Post() {
      const response = await axios.get(
        `http://localhost:8000/users/posts/${postId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setPost(response.data.post);
      setComments(response.data.post.comments);
    }
    Post();
  }, [postId, token]);

  async function handleSubmit(comment) {
    const response = await axios.delete(`http://localhost:8000/users/posts/${postId}/${comment}`, {
        headers: {
            Authorization: token,
        }
    })
    
    console.log(response);
  }

  return (
    <div id="post">
      <h1>{post.content}</h1>

      <div>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h3>
                {comment.username} commented: {comment.content}
              </h3>
              <button onClick={() => handleSubmit(comment.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ViewPost };
