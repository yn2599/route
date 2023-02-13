import { useEffect, useState } from 'react'
import api from "./Services/api";
import { Link } from 'react-router-dom';
import './home.css';

//https://api.themoviedb.org/3/movie/now_playing?api_key=6bf150927b3c7b0fe0fd5aa25fdfb244&language=pt-BR
//6bf150927b3c7b0fe0fd5aa25fdfb244
function Home (){
  const [filme,setFilme] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect( () =>{

    async function loadFilme(){
      const response = await api.get('movie/now_playing',{
        params:{
          api_key:"6bf150927b3c7b0fe0fd5aa25fdfb244",
          language: "pt-BR",
          page: 1,
        }
      })

     // console.log(response.data.results.slice(0,10))

     setFilme(response.data.results.slice(0,10))
     setLoading(false)

    }

    loadFilme();

  },[])

  if(loading){
    return(
      <div className='loading'>
        <h2>Carregando filme...</h2>
      </div>
    )
  }


    return (
        <div className="container">
          <div className="lista-filme">
            {filme.map((filme)=>{
              return(
                <article key={filme.id}>
                  <strong>{filme.title}</strong>
                  <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} 
                  alt={filme.title} />
                  <Link to={`/filme/${filme.id}`}>Acessar</Link>
                </article>
              )
            })}
          </div>
                    
        </div>
      );
}

export default Home;