import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "../Root/Root";
import {Article} from "../Article/Article"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/test_app" element={<Root/>}>
    <Route path=":title" element={<Article/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;