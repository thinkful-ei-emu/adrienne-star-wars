import React from 'react';
import './App.css';
import CharacterList from './charactersList';

export default class App extends React.Component {
  state = {
    characters: [],
    error: null
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchTerm = event.target['search'].value;
    this.componentDidMount(searchTerm);
  }

  componentDidMount = (searchTerm) => {
    fetch(`https://swapi.co/api/people/?search=${searchTerm}`)
    .then(res => {
      if(!res.ok) {
        return res.status(400).json({error: {message: 'Bad request'}});
      }
      return res.json();
    })
      .then(data => {
        this.setState({characters: data.results})
      })
      .catch(error => {
        this.setState({error: error});
      })
  }

  render() {
    return (
      <main>
        <h1>Star Wars Search</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='character-search' />
          <input type='text' id='search' />
          <button type='submit'>Search</button>
        </form>
        <div>
          <CharacterList characters={this.state.characters} />
        </div>
      </main>
    )
  }
}


