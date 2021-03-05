import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider.js"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocations] = useState({})

	const {locationId} = useParams();
	const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById (locationId)
    .then((response) => {
      setLocations(response)
    })
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      {console.log(location.animals, location.employees)}
      <div className="location__address">{location.address}</div>
      {/* animals and employees are arrays so use .map to get name */}
      <div className="animal__name">Animals: {location.animals?.map(a => a.name).join(", ")}</div>
      <div className="employee__name">Employees: {location.employees?.map(e => e.name).join(", ")}</div>
    </section>
  )
}
