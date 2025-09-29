import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import { PostCreate } from '../components/create_post.jsx';
import { Login } from '../components/login.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  }, {
    path: "/create",
    element: <PostCreate />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
