import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Person = () => {
    const params = useParams();
    const [persona, setPersona] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setPersona(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta Personas: {params.id}</h1>
            <h5>Name: {persona.name}</h5>
            <h5>Height: {persona.height}</h5>
            <h5>Hair Color: {persona.hair_color}</h5>
            <h5>Bird Year: {persona.birth_year}</h5>
            <h5>Homeworld: {persona.homeworld}</h5>
            <h5>Peliculas: </h5>
            <ul>
                {persona.films?.map((item, index, array)=>{
                    return(
                        <li key={"film" + index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Person