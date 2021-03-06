import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider.js"
import {EmployeeContext} from "./EmployeeProvider.js"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
    
    // Questions: Is the employees on line 19, the same as in the Provider? Is the same as in Employee List, ln 12?? For animals, setAnimals, I didn't use the same and it runs
// Why do I not have to getEmployees in the useEffect? Because of EmployeeContext?
    /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState(), the first variable is a "taco".
    */

    const [employees, setEmployees] = useState({
      name: "",
      locationId: 0,
      
    });

    const history = useHistory();

    /*
    Reach out to the world and get locations state on initialization, so we can provide their data in the form dropdowns
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
      const newEmployee = { ...employees }
      let selectedVal = event.target.value
      // forms always provide values as strings. But we want to save the ids as numbers. This will cover employee and location ids
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      /* Employee is an object with properties.
      Set the property to the new value
      using object bracket notation. */
      newEmployee[event.target.id] = selectedVal
      // update state
      setEmployees(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
      event.preventDefault() //Prevents the browser from submitting the form

      const locationId = employees.locationId
     

      if (locationId === 0) {
        window.alert("Please select a location")
      } else {
        //invoke addEmployee passing employees as an argument.
        //once complete, change the url and display the employee list
        addEmployee(employees)
        .then(() => history.push("/employees"))
      }
    }

    return (
      <form className="employeeForm">
          <h2 className="employeeForm__title">New Employee</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="name">Employee name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employees.name}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="location">Assign to location: </label>
                  <select value={employees.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                      <option value="0">Select a location</option>
                      {locations.map(l => (
                          <option key={l.id} value={l.id}>
                              {l.name}
                          </option>
                      ))}
                  </select>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveEmployee}>
            Save Employee
          </button>
      </form>
    )
}