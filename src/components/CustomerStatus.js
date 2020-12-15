import React from 'react'
import {Button} from 'reactstrap'
import {FiFilter} from 'react-icons/fi'

function CustomerStatus() {
    return(
        <div className="customer-status">
            {/* Customers */}
            <div>
                <h2>General Customers</h2>
                <p>Here is your general customers list data</p>
            </div>
            {/* Customer Stats */}
            <div> {/* DropDown Will Come */}
                <Button className="secondary btn"><FiFilter className="btn__icon" />&nbsp;Filter</Button>
            </div>
        </div>
    )
}
export default CustomerStatus