import React, {useContext, useEffect} from "react"
import {AnimalContext} from "./AnimalProvider.js"
import {LocationContext} from "../location/LocationProvider.js"
import {CustomerContext} from "../customers/CustomerProvider.js"
import {AnimalCard} from "./AnimalCard.js"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)
  
    //useEffect - reach out to the world for something - API call for the animals; wil only run one time at intial render because array is empty
    useEffect(() => {
      console.log("AnimalList: Initial render before data")
      getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, [])
  
  
    return (
      <div className="animals">
        {console.log("AnimalList: Render", animals)}
        {
            // using .map method to iterate the array of animals and generate HTML for each one by invoking the "AnimalCard" comp
            animals.map(animal => {
              const owner = customers.find(c => c.id === animal.customerId)
              const clinic = locations.find(l => l.id === animal.locationId)
          
              return <AnimalCard key={animal.id}
                          location={clinic}
                          customer={owner}
                          animal={animal} />
          })
        }
      </div>
    )
  }