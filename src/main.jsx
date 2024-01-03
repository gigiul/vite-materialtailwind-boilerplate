import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//import Navbar and Footer
import { MyNavbar as Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';

//import pages
import Home from './components/pages/Home.jsx'
import NotFound from './components/utility/NotFound.jsx'
import ExampleRoute from './components/pages/ExampleRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/example",
    element: <ExampleRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <div>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </ThemeProvider>

  </React.StrictMode>,
)
