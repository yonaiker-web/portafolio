import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { About } from "./routes/About.jsx";
import { Projects } from "./routes/Projects.jsx";
import { Contact } from "./routes/Contact.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* RouterProvider pone en contexto todas las rutas de la app */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
