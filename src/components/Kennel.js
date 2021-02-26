import React from "react"
import "./Kennel.css"
import {AnimalCard} from "./animal/AnimalCard.js"
import "./animal/Animal.css"
import {LocationCard} from "./location/LocationCard.js"
import "./location/Location.css"
import {EmployeeCard} from "./employee/EmployeeCard.js"
import "./employee/Employee.css"
import {CustomerCard} from "./customers/CustomerCard.js"
import"./customers/Customer.css"
import {PropsAndState} from "./PropsAndState.js"

export const Kennel = () => (
<> 
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <PropsAndState yourName="Tracy" />
        
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
        </article>
        
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>

 </>

)