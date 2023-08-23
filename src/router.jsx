import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from './layouts/MainLayout'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Cities from './pages/Cities'
import CityDetails from './pages/CityDetails'
import NotFound from "./pages/NotFound";





const router = createBrowserRouter([
    { 
        path: '/', element: <MainLayout />,
        children: [
            {path: '/', element: <Home />},
            {path: '/index', element: <Home />},
            {path: '/home', element: <Home />},
            {path: '/signin', element: <SignIn />},
            {path: '/signup', element: <SignUp />},
            {path: '/cities', element: <Cities />},
            {path: '/city/:city_id', element: <CityDetails />},
            
            { path: "/*", element: <NotFound />}
        ]
    }
])

export default router