import React, { useEffect, useState } from "react";
import DogList from "./DogList";

function App() {

  const [dogs, setDogs] = useState([])  
  const [selectedDog, setSelectedDog] = useState(null)
  const [isFiltered, setIsFiltered] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(res => res.json())
      .then(dogsData => setDogs(dogsData))
  }, [])

  const renderSelectedDogInfo = () => {
    return (
      <>
        <img src={selectedDog.image} alt={selectedDog.name}/>
        <h2>{selectedDog.name}</h2>
        <button onClick={handleDogStatus}>{selectedDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
      </>
    )
  }

  const handleDogStatus = () => {
    fetch(`http://localhost:3001/pups/${selectedDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !selectedDog.isGoodDog
      })
    }).then(res => res.json())
      .then(dog => setSelectedDog(dog))   
  }

  const handleFilterBtnClick = () => {
    setIsFiltered(!isFiltered)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleFilterBtnClick}>Filter good dogs:{isFiltered ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        <DogList dogs={dogs} setSelectedDog={setSelectedDog} isFiltered={isFiltered}/>
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
