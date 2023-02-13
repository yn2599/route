import {useState, useEffect} from 'react'
import './favoritos.css';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';


function Favoritos(){
    const [filme, setFilme] = useState([]);

    useEffect(()=>{

        const minhaLista = localStorage.getItem("@primeflix");
        setFilme(JSON.parse(minhaLista) || [] )


    },[])

    function excluirFilme(id){
        let filtrofilmes = filme.filter((item)=>{
            return(item.id !== id)
        })

        setFilme(filtrofilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtrofilmes))
        toast.success("Filme removido com sucesso")
    }

    return(
        <div className="meus-filmes">
            <h1>Meu filmes</h1>
            {filme.length === 0 && <span>Você não possui nehum filme salvo :(</span>}

            <ul>
                {filme.map((item)=>{
                    return(
                       <li key={item.id}>
                        <span>{item.title}</span>

                        <div>
                        <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                        <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                        </div>

                       </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default Favoritos;