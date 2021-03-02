import React, {useContext, useEffect} from "react"
import {AnimalContext} from "./AnimalProvider.js"
import {AnimalCard} from "./AnimalCard.js"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
  
    //useEffect - reach out to the world for something - API call for the animals; wil only run one time at intial render because array is empty
    useEffect(() => {
      console.log("AnimalList: useEffect - getAnimals")
      getAnimals()

    }, [])
  
  
    return (
      <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
            // using .map method to iterate the array of animals and generate HTML for each one by invoking the "AnimalCard" comp
          animals.map(animal => {
            //   key and animal become properties on the object passed in as in argument
            return <AnimalCard key={animal.id} animal={animal} />
          })
        }
      </div>
    )
  }