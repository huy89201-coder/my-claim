import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "@styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { Navigate, RouterProvider, createHashRouter } from "react-router-dom";

const App = lazy(() => import("./App"));
const Work = lazy(() => import("@components/Work"));
const Hotel = lazy(() => import("@components/Hotel"));
const Restaurant = lazy(() => import("@components/Restaurant"));
const Trustee = lazy(() => import("@components/Trustee"));

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/TRAVAUX" replace />,
      },
      {
        path: "TRAVAUX",
        element: (
          <Suspense fallback={<div>loading....</div>}>
            <Work />
          </Suspense>
        ),
      },
      {
        path: "SYNDIC",
        element: (
          <Suspense fallback={<div>loading....</div>}>
            <Trustee />
          </Suspense>
        ),
      },
      {
        path: "RESTAURANT",
        element: (
          <Suspense fallback={<div>loading....</div>}>
            <Restaurant />
          </Suspense>
        ),
      },
      {
        path: "HOTELLERIE",
        element: (
          <Suspense fallback={<div>loading....</div>}>
            <Hotel />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
