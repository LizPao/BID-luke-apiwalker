import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Vehicles = () => {
    const params = useParams();
    const [vehicles, setVehicles] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/vehicles/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setVehicles(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta Vehicles: {params.id}</h1>
        </>
    )
}

export default Vehicles