import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Home from './Pages/Home/Home.jsx';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/LogIn/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './components/providers/AuthProvider';
import BrandPage from './Pages/BrandPage/BrandPage';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';
import PrivateRout from './components/PrivateRoute/PrivateRout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: < Home />,
      },
      {
        path: '/addProduct',
        element: <PrivateRout><AddProduct /></PrivateRout>
      },
      {
        path: '/myCart',
        element: <PrivateRout><MyCart /></PrivateRout>,
        loader: () => fetch('https://brand-shop-server-ten-omega.vercel.app/carts')
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/brandPage/:brandName',
        element: <BrandPage></BrandPage>,
        loader: ({params}) => fetch(`https://brand-shop-server-ten-omega.vercel.app/products/${params.brandName}`)
      },
      {
        path: '/update/:id',
        element:<PrivateRout><UpdateProduct></UpdateProduct></PrivateRout>,
        loader: ({params}) => fetch(`https://brand-shop-server-ten-omega.vercel.app/product/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRout><ProductDetails></ProductDetails></PrivateRout>,
        loader: ({params}) => fetch(`https://brand-shop-server-ten-omega.vercel.app/product/${params.id}`)
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
