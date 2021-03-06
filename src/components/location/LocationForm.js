import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider.js"
import "./Location.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
    const {addLocation} = useContext(LocationContext)
    const {getLocations } = useContext(LocationContext)
   
       /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

    const [locations, setLocations] = useState({
      name: "",
      address: "",
      id: 0,
      
    });

    const history = useHistory();

    /*
    Reach out to the world and get locations state
    and locations state on initialization, so we can provide their data in the form dropdowns
    */
    useEffect(() => {
      getLocations()
    }, [])

    //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
      /* When changing a state object or array,
      always create a copy, make changes, and then set state.*/
      const newLocation = { ...locations }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. 
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      /* Location is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newLocation[event.target.id] = selectedVal
      // update state
      setLocations(newLocation)
    }

    const handleClickSaveLocation = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

        //invoke addLocation passing locations as an argument.
        //once complete, change the url and display the locations list
        addLocation(locations)
        .then(() => history.push("/locations"))
      }
    

    return (
      <form className="locationForm">
          <h2 className="locationForm__title">New Location</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Location Name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location name" value={locations.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="address">Location Address:</label>
                  <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location address" value={locations.address}/>
              </div>
          </fieldset>
          
          <button className="btn btn-primary"
            onClick={handleClickSaveLocation}>
            Save New Location
          </button>
      </form>
    )
}