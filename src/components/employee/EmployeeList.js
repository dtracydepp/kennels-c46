import React, {useContext, useEffect} from "react"
import {EmployeeContext} from "./EmployeeProvider.js"
import {EmployeeCard} from "./EmployeeCard.js"
import "./Employee.css"

export const EmployeeList = () => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
  
    //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
    useEffect(() => {
      console.log("EmployeeList: useEffect - getEmployees")
      getEmployees()

    }, [])
  
  
    return (
      <div className="employees">
        {console.log("EmployeeList: Render",employees)}
        {
            // using .map method to iterate the array of employees and generate HTML for each one by invoking the "EmployeeCard" comp
          employees.map(employee=> {
            //   key and location become properties on the object passed in as in argument
            return <EmployeeCard key={employee.id} employee={employee} />
          })
        }
      </div>
    )
  }

