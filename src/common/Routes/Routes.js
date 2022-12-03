import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../Components/AddDoctor/AddDoctor";
import AllUsers from "../../Components/AllUsers/AllUsers";
import Appointment from "../../Components/Appointment/Appointment";
import DashboardLayout from "../../Components/DashboardLayout/DashboardLayout";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import ManageDoctor from "../../Components/ManageDoctor/ManageDoctor";
import MyAppointment from "../../Components/MyAppointment/MyAppointment";
import Payment from "../../Components/Payment/Payment";
import Register from "../../Components/Register/Register";
import AdimnRoute from "../AdminRoute/AdminRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ],
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdimnRoute><AllUsers></AllUsers></AdimnRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdimnRoute><AddDoctor></AddDoctor></AdimnRoute>
            },
            {
                path: '/dashboard/managedoctor',
                element: <AdimnRoute><ManageDoctor></ManageDoctor></AdimnRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader:  ({ params }) => fetch(`https://doctors-chamber-server.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])
export default router;