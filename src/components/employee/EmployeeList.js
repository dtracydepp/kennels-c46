import React, {useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider.js"
import {LocationContext} from "../location/LocationProvider.js"
import {EmployeeCard} from "./EmployeeCard.js"
import {useHistory} from "react-router-dom"
import "./Employee.css"

export const EmployeeList = () => {
  // The useHistory hook tells React which route to visit. Tells React to render the employee form component.
  const history = useHistory()
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)
  
    //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
    useEffect(() => {
      console.log("EmployeeList: useEffect - getEmployees")
      getEmployees()
      .then(getLocations)

    }, [])
  
  
    return (
      <div className="employees">
         <h2>Employee</h2>
        <button onClick={() => {history.push("/employees/create")}}>
            Add Employee
          </button>
        {console.log("EmployeeList: Render",employees)}
        {
            // using .map method to iterate the array of employees and generate HTML for each one by invoking the "EmployeeCard" comp
          employees.map(employee=> {
            const clinic = locations.find(l => l.id === employee.locationId)
            //   key and location become properties on the object passed in as in argument
            return <EmployeeCard key={employee.id} employee={employee} 
                      location={clinic}/>
          })
        }
      </div>
    )
  }

