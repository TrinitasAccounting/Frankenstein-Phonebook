
//____This is only used for Class components (setState only used for class components as well)
// import { Component } from 'react'                     //___need to import this in order to build Classes

//______Used for Functional Components_____
import { useState, useEffect, ChangeEvent } from 'react';

// import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import Title from './components/title/title';

import { getData } from './utils/data.utils'

import './App.css';


//_______Using Function Component build____________________________


// We are actually setting the type of data that our monsters array or object will be in future. So we can just pass Monster[] and tyepscript will read each variable
export type Monster = {
  id: string;
  name: string;
  email: string
}





const App = () => {

  const [searchField, setSearchField] = useState('');          // useState gives us back an array of two values [value, setValue]. setState in the class component, it stores entire objects or arrays. 
  //                                                               //___everytime the 'value' changes from the initial, it will rerender the App. 
  const [monsters, setMonsters] = useState<Monster[]>([]);           //We are telling this state what type of data to receive
  const [stringField, setStringField] = useState('');                //typescript will automatically infer the data type if it can, for example this string situation
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);


  //_____//the way useEffect works is: it only re-runs or re-renders this code if the array passed in, the data has changed. So it will only run once inside of the function when the data is first mounted.
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    // // THe "getData" was defined in data.utils.ts. We did this in case the data that we receive from our JSON object, if that data type changes over time, then our app wont break
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    }

    fetchUsers();      //actually have to call the fetchUsers function. 
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monst) => {
      return monst.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])                                   //___it runs this effect anytime the 'monsters' array changes or the 'searchField' array changes

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();           //___this allows it to not be case sensitive. 
    setSearchField(searchFieldString);

  };

  return (
    <div className="App" >
      <h1 className='Title' > Frankenstein Profiles </h1>
      {/* <Title /> */}

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
        className='monsters-search-box'
      />


      {/* ___this is the CardList class component we built and are now importing */}
      < CardList monsters={filteredMonsters} />
    </div >
  );
};











//_______________Using Class Components build___________________________________




// class App extends Component {                           //____changed this so that it would also include the parent class Component
//   constructor() {                                          //___added a constructor function so we could add functionality
//     super();                                                   //___requires super() so it can access the parent functions methods (Component's functions)

//     this.state = {
//       monsters: [],
//       searchField: ''                                  //___we added this key later, so that we could store our filtered component and not permenantely effect the original monsters array
//     };
//   }

//   componentDidMount() {                                 //____anytime you need to get an API data, he mentioned you should put it inside of a 'componentDidMount()'
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())         //No curley brackets around 'response.json()'    //___apparently whatever gets passed as the response will then be passed to the users
//       .then((users) => this.setState(() => {
//         return { monsters: users };                     //___adding the users data into the state array as 'monsters: XXXX'
//       }
//       )
//       );
//   };


//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();           //___this allows it to not be case sensitive. 

//     this.setState(() => {                                                //___this is actually assigned the varialbe searchField, to the original state ('Monster' array). So that the original full list of monsters is not permenately changed         //____this sets the state of the monsters
//       return { searchField: searchField };                                //___using the new variable called 'filteredMonsters' that we assigned the filtered object too
//     })
//   };

//   render() {
//     //____added the render ()

//     const { monsters, searchField } = this.state;                        //___we have pulled keys from 'this.state' and cast them to these new variables. If we dont do this, we will have to put 'this.state.' in front in order to access 'this.state.searchField' and/or 'this.state.onSearchChange'.
//     const { onSearchChange } = this;                                        //____IMPORTANT
//     const filteredMonsters = this.state.monsters.filter((monst) => {
//       return monst.name.toLocaleLowerCase().includes(searchField);        //___this is filtering by only including the names in the monsters array that include the characters saved in the 'searchField' key. 
//     })                                                                                 //____this is technically a new array called filteredMonsters, but it is identical to the original monsters array until the searchField key is updated

//     return (
//       <div className="App">
//         {/* <input
//           className='search-box'
//           type='search'
//           placeholder='search monsters'                                             //___the onChange={this.onSearchChange} is calling the onSearchChange function we wrote above
//           onChange={onSearchChange} /> */}

//         {/* {filteredMonsters.map((monst) => {                                        //____this is what is actually being returned from the render, or what is shown on the actual page
//           return <div key={monst.id}><h1>{monst.name}</h1></div>                      //____it is pulling the name key from the new array filteredMonsters. This new array is again identical to the original array unless it is filtered
//         })
//         } */}
//         <Title />
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//           className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />            {/*___this is the CardList class component we built and are now importing */}
//       </div >
//     );
//   };
// };

export default App;
