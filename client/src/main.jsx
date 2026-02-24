import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS
// import "aos/dist/aos.css"; // Import AOS CSS

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Category from './pages/Category';
import Products from './pages/Products.jsx';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    // errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/category", element: <Category />},
      {path: "/products", element: <Products />},
      // {path: "*", element: <Error />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
