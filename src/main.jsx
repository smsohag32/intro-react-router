import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import Blog from "./components/Blog/Blog";
import Post from "./components/Posts/Posts";
import Banner from "./components/Banner/Banner";
import Posts from "./components/Posts/Posts";
import PostDetail from "./components/PostDetail/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "contact",

        element: <Contact></Contact>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "services",
        element: <Services></Services>,
        // data load korar kaj korer jonno loader use kora hoisy
        loader: () => fetch("products.json"),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "post",
        element: <Posts></Posts>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
      },
      {
        path: "post/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
    ],
  },
  {
    path: "/*",
    errorElement: <NotFound></NotFound>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
