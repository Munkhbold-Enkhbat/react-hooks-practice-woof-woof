import React from "react";
import Dog from "./Dog"

function DogList({ dogs, setSelectedDog, isFiltered }) {  

  const renderDogs = () => {
    const goodDogs = dogs.filter(dog => dog.isGoodDog)
    const selectedDogs = isFiltered ? [...goodDogs] : [...dogs]
    return selectedDogs.map(dog => {
      return <Dog key={dog.id} dog={dog} setSelectedDog={setSelectedDog}/>
    })
  }

  return renderDogs()
}

export default DogList