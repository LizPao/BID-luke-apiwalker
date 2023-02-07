import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate();

    const [opciones, setOpciones] = useState([]);
    const [selected, setSelected] = useState("");
    const [id, setId] = useState("1");
    const [error, setError] = useState(false);
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => response.data)
            .then(result => {
                let resList = []
                for (const [key] of Object.entries(result)) {
                    resList.push({ label: key })
                } 
                setOpciones(resList);
                setSelected(resList[1].url);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    

    const handleNavigation = (e) => {
        navigate(`/${selected}/${id}`);
    };
    

    return (
        <>
            <h1>Luke APIwalker</h1>
            <form className="form-api">
                <select className="form-select" onChange={e=>setSelected(e.target.value)} >
                    {
                        opciones.map((item, index) =>
                            <option key={item.label + index} value={item.url}> {item.label}</option>)
                    }
                </select>
                <label className="label-id">ID:</label>
                <input type={"number"} className="input-group mb-6" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="submit" className="btn btn-secondary" onClick={handleNavigation}>buscar</button>
            </form>
        </>
    )
}

export default Home