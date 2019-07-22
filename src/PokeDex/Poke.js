import React, { useState, useEffect }from 'react'
import axios from 'axios';

import './Poke.scss';

const Poke = () => {

  const initialPokeState = {
    pokeLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png',
    pokeId: 25,
    pokeName: '',
    pokeheight: '',
    pokeweight: '',
    pokeImg: '',
    pokeType: '',
  }
  
  const [poke, setPoke] = useState(initialPokeState);
  
  useEffect(() => {

      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.pokeId}`).then(res => {
      
      console.log(res.data.id)

      const fetchedState = {
        pokeId: res.data.id,
        pokeName: res.data.name,
        pokeheight: res.data.height,
        pokeweight: res.data.weight,
        pokeImg: res.data.sprites.front_default,
        pokeType: res.data.types[0].type.name
      }

      setPoke(fetchedState)
    }) 
    
    
    }, [poke.pokeId]);
  

  const nextPoke = () => {
    if (poke.pokeId < 802){
      setPoke({ pokeId: poke.pokeId + 1});
    }
  }

  const lastPoke = () => {
    if (poke.pokeId > 1)
      setPoke({ pokeId: poke.pokeId - 1 });
  }

  const resetPoke = () => {
    setPoke({ pokeId: 1 });
  }

  const handleEdit = (event) => {
    const eventValue = event.target.value;
    if (eventValue > 0 && eventValue < 803 && eventValue !== null)
      setPoke({ pokeId: event.target.value })
  }

    return (
      <div className="main">
        <img className="title" src={poke.pokeLogo} alt="poke-logo" />
        <div className="poke-dex">
          <img className="img" src={poke.pokeImg} alt="poke-img" />
          <div onClick={resetPoke} className="reset"></div>
          <input type="text" value={poke.pokeId} onChange={handleEdit} className="id" />
          <div className="info">
            <h1 className="name">{poke.pokeName}</h1>
            <h3 className="text">Peso: {poke.pokeweight} Kg </h3>
            <h3 className="text">Altura: {poke.pokeheight} Fts</h3>
            <h3 className="text">Tipo: {poke.pokeType}</h3>
          </div>
          <div className="buttons">
            <div onClick={lastPoke} className="button"></div>
            <div onClick={nextPoke} className="button"></div>            
          </div>
        </div>
      </div>
    )
}

export default Poke;