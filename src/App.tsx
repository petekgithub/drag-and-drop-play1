import React, { useState } from 'react';
import './App.css';

const listItems = [
  {
    id: "1",
    name: "Workout"

  },
  {
    id: "2",
    name: "Eat Popcorn"

  },
  {
    id: "3",
    name: "Watch: Big Lebowski"

  }, {
    id: "4",
    name: "Catch the Bee"

  }
]
 


function App() {
  const [todo, setTodo] = useState(listItems);




  return (
    <div className="App">

    </div>
  );
}

export default App;
