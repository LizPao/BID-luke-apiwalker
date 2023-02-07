import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Films = () => {
    const params = useParams();
    const [films, setFilms] = useState({})

    
    useEffect(() => {
        axios.get("https://swapi.dev/api/films/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log(result);
                setFilms(result);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta Films: {params.id}</h1>
            <h5>Title: {films.title}</h5>
            <h5>Episode Id: {films.episode_id}</h5>
            <h5>Opening Crawl: {films.opening_crawl}</h5>
            <h5>Director: {films.director}</h5>
            <h5>Producer: {films.producer}</h5>
            <h5>Release Date: {films.release_date}</h5>
            <h5>Characters: </h5>
            <ul>
                {films.characters?.map((item, index, array)=>{
                    return(
                        <li key={"characters" + index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Films