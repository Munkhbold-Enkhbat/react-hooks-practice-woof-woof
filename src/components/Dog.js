import React from 'react'

function Dog ({ dog, setSelectedDog }) {

  function handleClick() {
    setSelectedDog(dog)
  }

  return (
      <span onClick={handleClick}>
        {dog.name}
      </span>
  )
}

export default Dog