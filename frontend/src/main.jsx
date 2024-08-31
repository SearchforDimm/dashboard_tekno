import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import axios from "axios";
axios.defaults.withCredentials = true;
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WorkOrder from "./pages/WorkOrder";
import WorkLog from "./pages/WorkLog";
import Calendar from "./pages/Calendar";
import FormInput from "./components/FormInput";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/workorder",
    element: <WorkOrder />,
  },
  {
    path: "/worklog",
    element: <WorkLog />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/test",
    element: <FormInput />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
