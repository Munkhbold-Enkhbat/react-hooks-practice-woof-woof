import React from "react";
import Dog from "./Dog"

function DogList({ dogs, setSelectedDog }) {  

  const renderDogs = () => {
    return dogs.map(dog => {
      return <Dog key={dog.id} dog={dog} setSelectedDog={setSelectedDog}/>
    })
  }

  return renderDogs()
}

export default DogList