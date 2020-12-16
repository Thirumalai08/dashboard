import React from "react"
import { Button } from "reactstrap"
import {BiChevronDown} from 'react-icons/bi'
import DashboardRevenueChart from "./DashboardRevenueChart"

function DashboardRevenue(){
    return(
        <div className="dashboard__revenue">
            {/* One */}
            <div className="dashboard__revenue-details">
                <div className="title__info">
                    <h3>Orders Summary</h3>
                    <p className="text-muted">lorem ipsum dolor sit amet,consectetur</p>
                </div>
                <div className="title__day">
                    <Button className="btn">Monthly&nbsp;<BiChevronDown className="btn__icon" /></Button>
                </div>
            </div>
            {/* Two */}
            <div className="dashboard__revenue-charts">
                <DashboardRevenueChart />
            </div> 
        </div>
    )
}
export default DashboardRevenue