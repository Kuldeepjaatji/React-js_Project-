import {createBrowserRouter,Route, RouterProvider} from "react-router-dom";

import { Layout } from "./components/Layout";

import './App.css';

import { About } from './Pages/About';
import { Country } from './Pages/Country';
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Errorpage } from "./Pages/Errorpage";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"country",
        element:<Country/>,
      },
      { path:"contact",
        element:<Contact />
      }]
  }]);

const App = () => {


  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;