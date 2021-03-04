import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home.js"
import { AnimalList } from "../components/animal/AnimalList.js"
import { LocationList } from "../components/location/LocationList.js"
import { CustomerList } from "../components/customers/CustomerList.js"
import { EmployeeList } from "../components/employee/EmployeeList.js"
import { AnimalProvider } from "../components/animal/AnimalProvider.js"
import { LocationProvider } from "../components/location/LocationProvider.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import { CustomerProvider } from "./customers/CustomerProvider.js"
import { AnimalForm } from "../components/animal/AnimalForm.js"
import { LocationForm } from "../components/location/LocationForm.js"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/*Render the location list when http://localhost:3000/locations */}
            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>
                <Route path="/locations/create">
                    <LocationForm />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>

                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>

                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* /* Render the customer list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* /* Render the employee list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
                <Route path="/employees/create">
                    <AnimalForm />
                </Route>
                </LocationProvider>
            </EmployeeProvider>

        </>
    )
}