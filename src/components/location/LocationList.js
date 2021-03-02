import React, {useContext, useEffect} from "react"
import {LocationContext} from "./LocationProvider.js"
import {LocationCard} from "./LocationCard.js"
import "./Location.css"

export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
  
    //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
    useEffect(() => {
      console.log("LocationList: useEffect - getLocations")
      getLocations()

    }, [])
  
  
    return (
      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
            // using .map method to iterate the array of locations and generate HTML for each one by invoking the "LocationCard" comp
          locations.map(location=> {
            //   key and location become properties on the object passed in as in argument
            return <LocationCard key={location.id} location={location} />
          })
        }
      </div>
    )
  }