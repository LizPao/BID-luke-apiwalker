import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Starships = () => {
    const params = useParams();
    const [starships, setStarships] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setStarships(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta Starships: {params.id}</h1> 
        </>
    )
}

export default Starships