import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import StarWars from './components/StarWars';

const App = () => {
  const [people, setPeople] = useState();
  const [query, setQuery] = useState('https://swapi.co/api/people');
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(query)
    .then(res => {
      setPeople(res.data);
    })
    .catch(err => console.error("It seems you weren't able to get the data", err))
  }, [query])

  const nextPage = () => {
    if(people.next){
      setQuery(people.next);
    }
  }

  const prevPage = () => {
    if(people.previous){
      setQuery(people.previous);
    }
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWars 
        nextPage={nextPage} 
        prevPage={prevPage} 
        people={people} />
    </div>
  );
}

export default App;
