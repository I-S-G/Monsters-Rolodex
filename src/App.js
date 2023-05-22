import './App.css';
import { Component } from 'react';
import SBar from './components/search bar/search-bar.component';
import MonsterList from './components/monster list/monster-list.component';

class App extends Component {

  constructor() { 
    super();
    this.state = {
      monsters:[],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () => {
          return {monsters: users}
        }, 
        () => { 
          console.log("Successfully fetched data from the api");
        }
      )
     );
  }

  onChange = (event) => {
    this.setState({searchField: event.target.value.toLocaleLowerCase()});
  }

  render() {

    console.log("render");

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return(
      <div className='App'>
        <h1 className='title'> Monsters Rolodex </h1>
        <SBar className='search-monsters' onChange={this.onChange} placeholder = "Search Monsters" />
        <MonsterList filteredMonsters = {filteredMonsters} />
       
      </div>
    )
  }

}

export default App;
