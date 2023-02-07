import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Planets = () => {
    const params = useParams();
    const [planeta, setPlaneta] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setPlaneta(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta Planets: {params.id}</h1>
            <h5>Name: {planeta.name}</h5>
            <h5>Rotation Period: {planeta.rotation_period}</h5>
            <h5>Orbital Period: {planeta.orbital_period}</h5>
            <h5>Diameter: {planeta.diameter}</h5>
            <h5>Climate: {planeta.climate}</h5> 
            <h5>Population: {planeta.population}</h5>
            <h5>Residents: </h5>
            <ul>
                {planeta.films?.map((item, index, array)=>{
                    return(
                        <li key={"residents" + index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Planets