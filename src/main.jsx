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
        element: <AddProduct />
      },
      {
        path: '/myCart',
        element: <MyCart />
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
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
      },
      {
        path: '/update/:id',
        element:<UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <ProductDetails></ProductDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
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
