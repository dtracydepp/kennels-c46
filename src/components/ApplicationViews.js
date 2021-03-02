import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from "../components/animal/AnimalList.js"
import { LocationCard } from "../components/location/LocationCard.js"
import { CustomerCard } from "../components/customers/CustomerCard.js"
import { EmployeeCard } from "../components/employee/EmployeeCard.js"
import {AnimalProvider} from "../components/animal/AnimalProvider.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/*Render the location list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* /* Render the customer list when http://localhost:3000/customers */}

            <Route path="/customers">
                <CustomerCard />
            </Route>

            {/* /* Render the employee list when http://localhost:3000/employees */}

            <Route path="/employees">
                <EmployeeCard />
            </Route>

        </>
    )
}