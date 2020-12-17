import React from 'react'
import {Row,Col} from 'reactstrap'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import DashboardCustomerChart from './DashboardCustomerChart'

function DashboardCustomer(){
    return(
        <div className="dashboard__customer">
            <Row>
                <Col md="9">
                    <div className="dashboard__customer-map">
                        {/* One */}
                        <div className="details">
                            <div className="title__info">
                                <h3>Customer Map</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="title__day">
                                <p>Monthly</p>
                                <p>Weekly</p>
                                <p className="active">Today</p>
                            </div>
                        </div>
                        {/* Two */}
                        <div className="dashboard__customer__chart-data">
                            <div className="charts">
                                <DashboardCustomerChart className="chart" />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                    <div className="dashboard__customer-manage">
                        <AiOutlineAppstoreAdd className="icon" />
                        <h3>Manage Dashboard Layout</h3>
                        <div className="split-content">
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
                            <BsArrowRightShort className="icon" />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default DashboardCustomer