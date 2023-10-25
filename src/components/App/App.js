import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "../Root/Root";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/test_app/" element={<Root/>}>
    <Route path="/test_app/html" lazy={() => import('../tabs/Html')} />
    <Route path="/test_app/javascript" lazy={() => import('../tabs/JavaScript')} />
    <Route path="/test_app/css" lazy={() => import('../tabs/Css')} />
    <Route path="/test_app/react" lazy={() => import('../tabs/ReactC')} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;