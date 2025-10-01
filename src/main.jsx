import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PostCreate } from "../components/create_post.jsx";
import { Login } from "../components/login.jsx";
import { ViewAllPosts } from "../components/view_all_posts.jsx";
import { ViewPost } from "../components/view_post.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/posts",
    element: <ViewAllPosts />
  },
  {
    path: "/posts/:postId",
    element: <ViewPost />
  },
  {
    path: "/posts/create",
    element: <PostCreate />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
