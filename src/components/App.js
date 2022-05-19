import React, { useEffect, useState } from "react";
import DogList from "./DogList";

function App() {

  const [dogs, setDogs] = useState([])  
  const [selectedDog, setSelectedDog] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(res => res.json())
      .then(dogsData => setDogs(dogsData))
  }, [])

  console.log(selectedDog);
  const renderSelectedDogInfo = () => {
    return (
      <>
        <img src={selectedDog.image} alt={selectedDog.name}/>
        <h2>{selectedDog.name}</h2>
        <button>{selectedDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
      </>
    )
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogList dogs={dogs} setSelectedDog={setSelectedDog}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {selectedDog ? renderSelectedDogInfo() : null}
        </div>
      </div>
    </div>
  );
}

export default App;
