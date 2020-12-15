import React from 'react'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {FiCalendar} from 'react-icons/fi'
import { Button } from 'reactstrap'

function OrderStatus() {
    return(
        <div className="order-status">
            {/* Orders */}
            <div>
                <h2>Orders</h2>
                <p>Here is your order list data</p>
            </div>
            {/* Orders Stats */}
            <div> {/* DropDown Will Come */}
                <Button className="secondary btn"><AiOutlineThunderbolt className="btn__icon" />&nbsp;All Status</Button>
                <Button className="secondary btn"><FiCalendar className="btn__icon" />&nbsp;Today</Button>
            </div>
        </div>
    )
}
export default OrderStatus