import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";

export const router = [
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  { path: "/about", element: <About /> },
];

export const Switcher = () => {
  return (
    <Routes>
      {router.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};
