import React from 'react'
import {FiCalendar} from 'react-icons/fi'
import { Button } from 'reactstrap'

function DashboardStatus(){
    return(
        <div className="dashboard-status">
        {/* Dashboard */}
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to Davur admin!</p>
        </div>
        {/* Dashboard Stats */}
        <div> {/* DropDown Will Come */}
            <Button className="secondary btn"><FiCalendar className="btn__icon" />&nbsp;Filter Period</Button>
        </div>
    </div>
    )
}
export default DashboardStatus