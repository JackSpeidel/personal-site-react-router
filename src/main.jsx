import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import './main.scss'
import ErrorPage from "./error-page";
import Root from "./routes/root/root";
import Index from "./routes/index/index";
import AboutMe from "./routes/aboutme/aboutme";
import Projects from "./routes/projects/projects";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Index /> },
                    {
                        path: "aboutme",
                        element: <AboutMe />,

                    },
                    {
                        path: "projects",
                        element: <Projects />,

                    },
                ]
            },
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
