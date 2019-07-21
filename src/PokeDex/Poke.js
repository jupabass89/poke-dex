import React, { Component } from 'react'

import './Poke.scss';

export default class Poke extends Component {

  state = {
    urlApi: 'https://pokeapi.co/api/v2/pokemon/',
    pokeLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png',
    pokeId: 25,
    pokeName: '',
    pokeheight: '',
    pokeweight: '',
    pokeImg: '',
    pokeType: ''
  }

  componentDidMount() {
    this.getPoke();
  }

  componentDidUpdate(prevProps, prevState) {
    const { pokeId: prevPokeId } = prevState;
    const { pokeId } = this.state;
    if (prevPokeId !== pokeId) this.getPoke();
  }

  getPoke = async () => {
    const { urlApi, pokeId } = this.state;
    const resp = await fetch(urlApi + pokeId);
    const data = await resp.json();
    this.setState({
      pokeId: data.id,
      pokeName: data.name,
      pokeheight: data.height,
      pokeweight: data.weight,
      pokeImg: data.sprites.front_default,
      pokeType: data.types[0].type.name
    });
  }

  nextPoke = () => {
    if (this.state.pokeId < 802)
      this.setState({ pokeId: this.state.pokeId + 1 });
  }

  lastPoke = () => {
    if (this.state.pokeId > 1)
      this.setState(({ pokeId }) => ({ pokeId: pokeId - 1 }));
  }

  resetPoke = () => {
    this.setState({ pokeId: 1 });
  }

  handleEdit = (event) => {
    const eventValue = event.target.value;
    if (eventValue > 0 && eventValue < 803 && eventValue !== null)
      this.setState({ pokeId: event.target.value })
  }

  render() {
    return (
      <div className="main">
        <img className="title" src={this.state.pokeLogo} alt="poke-logo" />
        <div className="poke-dex">
          <img className="img" src={this.state.pokeImg} alt="poke-img" />
          <div onClick={this.resetPoke} className="reset"></div>
          <input type="text" value={this.state.pokeId} onChange={this.handleEdit} className="id" />
          <div className="info">
            <h1 className="name">{this.state.pokeName}</h1>
            <h3 className="text">Peso: {this.state.pokeweight} Kg </h3>
            <h3 className="text">Altura: {this.state.pokeheight} Fts</h3>
            <h3 className="text">Tipo: {this.state.pokeType}</h3>
          </div>
          <div className="buttons">
            <div onClick={this.lastPoke} className="button"></div>
            <div onClick={this.nextPoke} className="button"></div>
          </div>
        </div>
      </div>
    )
  }
}
