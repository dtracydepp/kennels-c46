import React, {useContext, useEffect} from "react"
import {CustomerContext} from "./CustomerProvider.js"
import {CustomerCard} from "./CustomerCard.js"
import "./Customer.css"

export const CustomerList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)
  
    //useEffect - reach out to the world for something - API call for the locations; wil only run one time at intial render because array is empty
    useEffect(() => {
      console.log("CustomerList: useEffect - getCustomers")
      getCustomers()

    }, [])
  
  
    return (
      <div className="customers">
        {console.log("CustomerList: Render",customers)}
        {
            // using .map method to iterate the array of customers and generate HTML for each one by invoking the "CustomerCard" comp
          customers.map(customer=> {
            //   key and location become properties on the object passed in as in argument
            return <CustomerCard key={customer.id} customer={customer} />
          })
        }
      </div>
    )
  }
