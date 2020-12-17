import React from 'react'
import { Col, Row, Button } from 'reactstrap'
import {FiBarChart2} from 'react-icons/fi'
import AnalyticsOrderChart from './AnalyticsOrderChart'
import {BiChevronDown} from 'react-icons/bi'

function AnalyticsOrders(){
    return(
        <div className="anlaytics__orders">
            <Row>
                <Col>
                    <div className="chart-orders">
                        {/* One */}
                        <div className="details">
                            <div className="title__info">
                                <h3>Chart Orders</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="title__day">
                                <p>Monthly</p>
                                <p>Weekly</p>
                                <p className="active">Today</p>
                            </div>
                        </div>
                        {/* Two */}
                        <div className="sales">
                            <div>
                                <h3><FiBarChart2 className="icon" />257k</h3>
                                <p className="text-muted">Total Sales</p>
                            </div>
                            <div>
                                <h3><FiBarChart2 className="icon" />1,245</h3>
                                <p className="text-muted">Avg. Sales per day</p>
                            </div>
                        </div> 
                        {/* Three */}
                        <div className="chart-data">
                            <AnalyticsOrderChart classname="chart" />
                        </div> 
                    </div>
                </Col>
                <Col>
                    <div className="trending-items">
                        {/* One */}
                        <div className="trending-status">
                            <div>
                                <h2>Trending Items</h2>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div> {/* DropDown Will Come */}
                                <Button className="secondary btn">Monthly&nbsp;<BiChevronDown className="btn__icon" /></Button>
                            </div>
                        </div>
                        {/* Two */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default AnalyticsOrders