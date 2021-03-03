import React from "react"
import "./Animal.css"


export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">{ animal.breed }</div>
        <address className="location__address">Location:{location.name}</address>
        <div className="customer__name">Customer:{customer.name}</div>  
    </section>
)