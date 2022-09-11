import React from 'react'
import Person from './Person'

function NameList() {
    // const Names = ['Bruce','Diana','Clark']
    // const NameList = Names.map(name => <h2>{name}</h2>)

    const Persons = [
        {
            id: 1,
            name : 'Anubhav',
            age: 19,
            skill : 'React' 
        },
        {
            id: 2,
            name : 'Ankit',
            age: 20,
            skill : 'Angular' 
        },

        {
            id: 3,
            name : 'Bhargo',
            age: 20,
            skill : 'Vue'
        }

    ]
    const PersonList = Persons.map(person=>(
       <Person key={person.id} person={person}></Person>  // passing props
    ))
  return (
    <div>
      {/* <h2>{Name[0]}</h2>
      <h2>{Name[1]}</h2>
      <h2>{Name[2]}</h2> */}
      {/* {
      Names.map(name => <h2>{name}</h2>)
      } */}
      {/* {
      NameList
      } */}
      {PersonList}
    </div>
  )
}

export default NameList
