import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from "../components/animal/AnimalList.js"
import { LocationList } from "../components/location/LocationList.js"
import { CustomerCard } from "../components/customers/CustomerCard.js"
import { EmployeeList } from "../components/employee/EmployeeList.js"
import {AnimalProvider} from "../components/animal/AnimalProvider.js"
import {LocationProvider} from"../components/location/LocationProvider.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/*Render the location list when http://localhost:3000/locations */}
           <LocationProvider>
            <Route path="/locations">
                <LocationList />
            </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <LocationProvider>
            <AnimalProvider>
                <Route path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>
            </LocationProvider>

            {/* /* Render the customer list when http://localhost:3000/customers */}

            <Route path="/customers">
                <CustomerCard />
            </Route>

            {/* /* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            </EmployeeProvider>

        </>
    )
}