# Guía

## Creando el proyecto.

Comenzamos creando el proyecto, para esto nos paramos en la carpeta donde queremos crear el proyecto y usar npx create-react-app para crear un nuevo proyecto.

```Shell
cd Escritorio
npx create-react-app react-dojo
``` 
Luego nos movemos a la carpeta donde creamos el proyecto y lo desplegamos para comprobar que todo haya salido bien.

```Shell
cd react-dojo
npm start
``` 

Si todo funcinó bien esto nos dirá donde se desplego el proyecto, que por lo general es en: [http://localhost:3000/](localhost:3000).

## Configuración inicial.
Abrimos otra terminal en esa misma carpeta e instalamos axios para hacer peticiones get a la API y Sass para los estilos.

```Shell
npm install axios node-sass
``` 
En un editor de texto ubicamos la carpeta ´´´/src´´´ y borramos todo excepto ´´´app.js´´´ e ´´´index.js´´´ 

Luego en ´´´index.js´´´ borramos estas dos importaciones:

´´´JSX
import './index.css';
import * as serviceWorker from './serviceWorker';
´´´
Y estas líneas correspondientes al serviceWorker:

´´´JSX
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
´´´ 
Ahora en ´´´App.js´´´ borramos las siguientes importaciones:

´´´JSX
 import logo from './logo.svg';
import './App.css';
´´´ 
Y todo dentro del return de la función App:

´´´JSX
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React        </a>
      </header>
    </div>
´´´
Dejamos algo dentro del return para comprobar que todavía funciona:

´´´JSX
import React from 'react';

function App() {
  return (
    <div><h1>Hola</h1></div>
  );
}

export default App;
´´´ 
Luego en ´´´/src´´´ creamos la carpeta ´´´Pokedex´´´ y allí creamos el archivo ´´´Poke.scss´´´ y copiamos y pegamos lo siguiente:

´´´SCSS
@import "./variables.scss";

.main {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  .title {
    height: 20%;
    margin: 20px 0 50px 0px;
  }

  .poke-dex {
    display: grid;
    grid-template-columns: 350px 60px 1fr;
    grid-template-rows: 150px 180px 1fr;
    background-image: $pokedex;
    background-repeat: no-repeat;
    width: 750px;
    height: 540px;

    .id {
      grid-column: 1;
      grid-row: 3;
      font-size: 30px;
      font-weight: bold;
      opacity: 0.7;
      width: 118px;
      height: 55px;
      display: flex;
      justify-self: center;
      align-self: flex-end;
      margin-bottom: 36px;
      margin-left: -52px;
      justify-content: center;
      text-align: center;
      font-family: $info-font-family;
      background-color: yellow;
      border: 2px solid black;
      border-radius: 10px;
    }

    .info {
      grid-column: 3;
      grid-row: 2;
      color: $info-text-color;
      text-align: center;
      display: flex;
      flex-direction: column;
      font-weight: bold;
      font-family: $info-font-family;
      width: 70%;
      height: 55%;
      padding: 10px;
      margin: 10px 0 0 32px;
      background-color: rgb(7, 212, 7);
      border-radius: 10px;
      border: 2px solid black;

      .name {
        font-size: 25px;
        font-weight: bold;
        color: $info-text-color;
        margin: 0 0 10px 0;
        opacity: 0.7;
      }

      .text {
        font-size: 15px;
        font-weight: bold;
        color: $info-text-color;
        align-self: flex-start;
        margin: 0;
        opacity: 0.7;
      }
    }

    .buttons {
      grid-column: 3;
      grid-row: 3;
      padding: 60px 210px 110px 60px;
      display: flex;
      flex-direction: row;

      .button {
        width: 100%;
        cursor: pointer;
      }
    }

    .reset {
      width: 70px;
      height: 30px;
      grid-column: 1;
      grid-row: 3;
      justify-self: center;
      margin: 60px 0 0 40px;
      cursor: pointer;
    }

    .img {
      grid-column: 1;
      grid-row: 2;
      justify-self: center;
      align-self: center;
      width: 50%;
    }
  }
}
´´´ 
Y luego también en ´´´/src/Pokedex´´´ creamos el archivo ´´´variables.scss´´´  y pegamos lo siguiente en el:
´´´SCSS
$pokedex: url("https://vignette.wikia.nocookie.net/pokemon-wiki-no-2/images/d/d0/Pokedex1.gif/revision/latest?cb=20130630141050");
$info-text-color: rgb(2, 2, 2);
$info-font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
´´´ 

## Creando el componente.

Ahora creamos el componente que se encargará de todo en la aplicación. Para esto en la carpeta ´´´/src/Pokedex´´´ creamos el archivo ´´´Poke.js´´´ , agregamos la importación de la biblioteca de React y la hoja de estilos y creamos la función:

´´´JSX
import React from ‘react’;
import import './Poke.scss';

const Poke = () => {
    return(
    <div>Estoy en el componente Poke</div>
    ) 
}

export default Poke;
´´´

Para asegurarnos que funciona vamos a la clase ´´´App.js´´´ e importamos nuestro componente recién creado y lo agregamos dentro App:

´´´JSX
import React from 'react';
import Poke from './Pokedex/Poke';

function App() {
  return (
    <div><Poke /></div>
  );
}

export default App;
´´´

## Probando props

Las propiedades son una parte importante de los componentes de React, ya que nos permiten modificar los componentes cambiando un atributo de entrada.

Para esto modificaremos el componente ´´´Poke.js´´´ para que reciba props y nos muestre un id que recibimos como atributo de entrada:

´´´JSX 
 const Poke = (props) => {
    return(
    <div>Estoy en el componente {props.id}</div>
    ) 
}
´´´

Ahora modificamos ´´´App.js´´´ que es donde ingresamos este atributo:

´´´JSX
function App() {
  return (
    <div><Poke id="25" /></div>
  );
}
´´´

### Definiendo las vistas.

Ahora definimos las vistas HTML que es lo que veremos finalmente cuando se ejecute la aplicación.

En el componente ´´´Poke.js´´´ modificamos el return de esta manera:

´´´JSX
return(
        <div className="main">
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="poke-logo" />
        <div className="poke-dex">
          <img className="img"  alt="" />
          <div  className="reset"></div>
          <input type="text"  className="id" />
          <div className="info">
            <h1 className="name"></h1>
            <h3 className="text">Peso:  Kg </h3>
            <h3 className="text">Altura:  m</h3>
            <h3 className="text">Tipo: </h3>
          </div>
          <div className="buttons">
            <div className="button"></div>
            <div className="button"></div>            
          </div>
        </div>
      </div>
    )
´´´ 

## Agregando el 📌StateHook.

El hook de estado nos permite definir y modificar el estado de un componente funcional de manera fácil.

Primero importamos el hook de estado al inicio de ´´´Poke.js´´´ en la misma linea donde importamos React:

´´´JSX
import React, { useState } from 'react';
´´´

Luego definimos el estado inicial de Poke para saber qué atributos tendrá e inicializarlos. En el componente ´´´Poke.js´´´ este objeto al principio y luego inicializamos el usamos el hook para inicializar el estado con este objeto :

´´´JSX
const initialPokeState = {
    pokeId: props.id,
    pokeName: '',
    pokeHeight: '',
    pokeWeight: '',
    pokeImg: '',
    pokeType: '',
  }

const [poke, setPoke] = useState(initialPokeState);
´´´ 

## Agregando el ⚡ UseEffect Hook.

El hook de efecto permite realizar efectos secundarios en los componentes funcionales. Como cambiar su estado si hay alguna actualización o cosas por el estilo.

Primero vamos a importar el useEffect hook y axios para recibir los datos de la API arriba de ´´´Poke.js´´´:

´´´JSX
import React, { useState, useEffect }from 'react'
import axios from 'axios';
´´´

Ahora creamos el hook que se encargará de actualizar los datos desde la API, según el ID que se le proporcione:

´´´JSX

useEffect(() => {

      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.pokeId}`).then(res => {

      const fetchedState = {
        pokeId: res.data.id,
        pokeName: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
        pokeHeight: res.data.height/10,
        pokeWeight: res.data.weight/10,
        pokeImg: res.data.sprites.front_default,
        pokeType: res.data.types[0].type.name.charAt(0).toUpperCase() + res.data.types[0].type.name.slice(1)
      }

      setPoke(fetchedState)
    })
}, [poke.pokeId]);
´´´

El dato ´´´, [poke.pokeId]);´´´ del final se agrega para que el hook no tenga una fuga de memoria. Sin esto el hook se actualizará infinitamente pero con eso, sólo lo hará cuando el dato ```poke.pokeId´´´ cambie.

## Modificando la vista para ver el Pokémon que se pasó por props.

Ahora que recibimos los datos desde el hook de efecto, podemos observarlos. Para esto modificamos la vista en ´´´Poke.js´´´ la siguiente manera:

´´´JSX
return(
        <div className="main">
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="poke-logo" />
        <div className="poke-dex">
          <img className="img" src={poke.pokeImg} alt="" />
          <div  className="reset"></div>
          <input type="text" value={poke.pokeId} className="id" />
          <div className="info">
            <h1 className="name">{poke.pokeName}</h1>
            <h3 className="text">Peso: {poke.pokeWeight} kg </h3>
            <h3 className="text">Altura: {poke.pokeHeight}  m</h3>
            <h3 className="text">Tipo: {poke.pokeType} </h3>
          </div>
          <div className="buttons">
            <div className="button"></div>
            <div className="button"></div>            
          </div>
        </div>
      </div>
    )
´´´

Si cambiamos el id entrada de props desde ´´´App.js```, podemos ver un Pokémon distinto:

´´´JSX
function App() {
  return (
    <div><Poke id="150" /></div>
  );
}
´´´

En este caso veríamos a Mewtwo en vez de Pikachu.

## Agregando funciones para manejar cambios.

Ahora agregaremos funciones para cambiar los Pokémon sin pasarlos por atributos de entrada.

Primero agregaremos las funciones ´´´nextPoke´´´´ y ´´´lastPoke´´´ para movernos de a uno al siguiente y anterior Pokémon en la Pokédex. Para ello agregamos estas funciones en ´´´Poke.js´´´:

´´´JSX
const nextPoke = () => {
    if (poke.pokeId < 802){
      setPoke({ pokeId: poke.pokeId + 1});
    }
  }

  const lastPoke = () => {
    if (poke.pokeId > 1)
      setPoke({ pokeId: poke.pokeId - 1 });
  }
´´´
Luego de estas, también en ´´´Poke.js´´´ agregamos la función ´´´resetPoke´´´ para regresar al primer Pokémon en la Pokédex:

´´´JSX
const resetPoke = () => {
    setPoke({ pokeId: 1 });
  }
´´´

Ahora también en ```Poke.js``` agregaremos la función ´´´handleEdit´´´ para que si se modifica el campo con el ID, se muestre el Pokémon referente a este:

´´´JSX
const handleEdit = (event) => {
    const eventValue = event.target.value;
    if (eventValue > 0 && eventValue < 803 && eventValue !== null)
      setPoke({ pokeId: event.target.value })
  }
´´´ 

## Modificando por última vez la vistas.

Ahora modificaremos por última vez las vistas en ´´´Poke.js´´´ para agregar las funcionalidades a los botones, de este modo:

´´´JSX
return(
        <div className="main">
        <img className="title" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" alt="poke-logo" />
        <div className="poke-dex">
          <img className="img" src={poke.pokeImg} alt="" />
          <div onClick={resetPoke} className="reset"></div>
          <input type="text" value={poke.pokeId} onChange={handleEdit} className="id" />
          <div className="info">
            <h1 className="name">{poke.pokeName}</h1>
            <h3 className="text">Peso: {poke.pokeWeight} kg </h3>
            <h3 className="text">Altura: {poke.pokeHeight}  m</h3>
            <h3 className="text">Tipo: {poke.pokeType} </h3>
          </div>
          <div className="buttons">
            <div onClick={lastPoke} className="button"></div>
            <div onClick={nextPoke} className="button"></div>            
          </div>
        </div>
      </div>
    )
´´´

# Fin