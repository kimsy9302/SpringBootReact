import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";
import greenRouter from "./greenRouter";
import productsRouter from "./productsRouter";
import memberRouter from "./memberRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>

const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))
const Green = lazy(() => import("../pages/GreenPage"));
const ProductsIndex = lazy(() => import("../pages/products/IndexPage"));

const root = createBrowserRouter([
    {
        path:"", // 리다이렉션 처리
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path:"about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path:"todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter() // 중첩 라우팅의 분리
    },
    {
        path:"green",
        element: <Suspense fallback={Loading}><Green/></Suspense>,
        children: greenRouter() // 중첩 라우팅의 분리
    },
    {
        path:"products",
        element: <Suspense fallback={Loading}><ProductsIndex/></Suspense>,
        children: productsRouter() // 중첩 라우팅의 분리
    },
    {
        path:"member",
        children: memberRouter()
    }
])

export default root;