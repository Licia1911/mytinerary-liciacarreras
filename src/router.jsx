import { createBrowserRouter } from "react-router-dom";
import { createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from './layouts/MainLayout'
import SignIn from "./pages/SignIn"
import Cities from './pages/Cities'
import CityDetails from './pages/CityDetails'
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import Profile from "./pages/Profile";



const router = createHashRouter([
    {
        path: '/', element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/index', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/cities', element: <Cities /> },
            { path: '/city/:city_id', element: <CityDetails /> },
            { path: '/auth/signup', element: <Form /> },
            { path: "/profile", element: <Profile /> },

            { path: "/*", element: <NotFound /> }
        ]
    }
])

export default router