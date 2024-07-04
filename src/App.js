import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchbox/search-box.component';
import { useState, useEffect } from 'react';

const App = () => {

  //search's state
  const [searchField, setSearchField] = useState('')

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  console.log('render')
  //monster's state
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  
  //filters state
  /**
   * We do this, because we only want to filter when monter's stare or search fild have been updating
   */
  const [filteredMonsters,setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    const newFilterMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
  
    })

    setFilterMonsters(newFilterMonster);
  }, [monsters, searchField])
 



  return (
    <div className="App">
      <h1 className='app-title'>Monsters</h1>
      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder={'Search monster'} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;



/*

class App extends Component {
  //wheneer this class is contruct, build. I want to run this constructor function first
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
*/
/**It will run whenever the component mounts 
 * Mounting is the first time the component place onto the DOM
*/
/* componentDidMount() {*/
/**This is going to be a promess
 * A promess is something that is asynchronous is jS
 */
/* 
}


onSearchChange = (event) => {
 const searchField = event.target.value.toLowerCase();
 this.setState(() => {
   return { searchField: searchField }
 })
}

render() {
 const { monsters, searchField } = this.state;
 const { onSearchChange } = this;

 

 return (
  
 );

}


}*/


