import React from 'react'
import {FiCalendar} from 'react-icons/fi'
import {Button} from 'reactstrap'

function AnalyticsStatus(){
    return(
        <div className="analytics-status">
            <div>
                <h2>Analytics</h2>
                <p>Here is your restaurant summary with graph view</p>
            </div>
            <div> {/* DropDown Will Come */}
                <Button className="secondary btn"><FiCalendar className="btn__icon" />&nbsp;Filter Period</Button>
            </div>
        </div>
    )
}
export default AnalyticsStatus