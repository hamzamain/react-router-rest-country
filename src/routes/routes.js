import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Countries from "../components/Countries/Countries";
import Country from "../components/Country/Country";
import Home from "../components/Home/Home";
import Products from "../components/Products/Products";
import Main from "../Layout/Main";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/countries",
        loader: async () => {
          return fetch("https://restcountries.com/v3.1/all");
        },
        element: <Countries></Countries>,
      },
      {
        path: "/country/:name",
        loader: async ({ params }) => {
          return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
        },
        element: <Country></Country>,
      },
    ],
  },
]);

export default Routers;
