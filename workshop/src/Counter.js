import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [ currentValue, setCurrentValue ] = useState(0);

  useEffect(() => {
    console.log(`Rendered! Current value: ${ currentValue }`);
  })

  useEffect(() => {
    console.log('Effect with second parameter!')
  }, [])

  setTimeout(() => {
     setCurrentValue(currentValue + 1); 
  }, 1000);

  return <p>{ currentValue }</p>
}

export default Counter