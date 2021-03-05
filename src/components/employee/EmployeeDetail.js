import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider.js"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployees] = useState({})

	const {employeeId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployees(response)
    })
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      {/* ? prevents nested values from breaking the code if the object is empty*/}
      <div className="employee__location">Location: {employee.location?.name}</div>
  
    </section>
  )
}