import {
  createBrowserRouter,
  RouterProvider,
  Route,Outlet,
  Link,
} from "react-router-dom";
import Home from "./home"
import About from "./about"
import Login from "./login"
import Category from "./category"
import Navbar from "./components/navbar"
import ProductDetail from "./product"
import Footer from "./components/footer"
import "./App.css"

const Layout =()=>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/productdetails",
        element:<ProductDetail/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {

  return (
    <div >
         <RouterProvider router={router}/>
    </div>
  );
}

export default App;


