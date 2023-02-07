import { createBrowserRouter } from "react-router-dom";
import Films from "../components/Films";
import Home from "../components/Home";
import Person from "../components/People";
import Planets from "../components/Planets";
import Species from "../components/Species";
import Starships from "../components/Starships";
import Vehicles from "../components/Vehicles";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/people/:id",
        element: <Person />,
    },
    {
        path: "planets/:id",
        element: <Planets />,
    },
    {
        path: "films/:id",
        element: <Films />,
    },
    {
        path: "species/:id",
        element: <Species />,
    },
    {
        path: "vehicles/:id",
        element: <Vehicles />,
    },
    {
        path: "starships/:id",
        element: <Starships />,
    },
]);