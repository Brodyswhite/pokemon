import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeCard from './components/PokeCard'

function App() {

  const [poke,setPoke] = useState([]);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => res.json())
    .then(res => setPoke(res.results))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button className="btn btn-primary"
      onClick={getPokemon}
      >Get Pokemon</button>
      <div className="d-flex flex-wrap p-5">
      {
        poke.map((p,i) => {
          return <PokeCard
                    poke={p}
                    key={i}
          />
        })
      }
      </div>
    </div>
  );
}

export default App;
