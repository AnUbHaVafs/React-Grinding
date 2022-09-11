import React from 'react'

function Person({person, key}) {
  return (
    <div>
       <h2>
           {key} I am {person.name} and I am {person.age} years old and I know {person.skill}.
        </h2>
    </div>
  )
}

export default Person
