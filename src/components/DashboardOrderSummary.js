import React from "react"
import { Button, Col, 
    //Progress, 
    Row } from "reactstrap"
import { BiChevronRight } from "react-icons/bi";
import DashboardOrderChart from "./DashboardOrderChart";
function DashboardOrderSummary(){
    return(
        <div className="dashboard__order__summary">
            {/* One */}
            <div className="dashboard__order__summary-details">
                <div className="title__info">
                    <h3>Orders Summary</h3>
                    <p className="text-muted">lorem ipsum dolor sit amet,consectetur</p>
                </div>
                <div className="title__day">
                    <p>Monthly</p>
                    <p>Weekly</p>
                    <p className="active">Today</p>
                </div>
            </div>
            {/* Two */}
            <div className="dashboard__order__order-details">
                <div className="new__order">
                    <div><Button color="success" style={{padding:"5px 21px",fontWeight:"bold"}}>25</Button></div>
                    <div><h3><span>New Orders</span>&nbsp;<span className="notify"></span></h3></div>
                </div>
                <div className="manage__orders">
                    <p>Manage Orders<BiChevronRight className="icon" /></p>
                </div>
            </div>
            {/* Three */}
            <div className="dashboard__order__order-cards">
                <Row>
                    <Col md="4">
                        <div className="order-card">
                            <h4>25</h4>
                            <p className="text-muted">On Delivery</p>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="order-card">
                            <h4>60</h4>
                            <p className="text-muted">Delievered</p>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="order-card">
                            <h4>7</h4>
                            <p className="text-muted">Canceled</p>
                        </div>
                    </Col>
                </Row>
            </div>
            {/* Four */}
            <div className="dashboard__order__chart-data">
                    {/*<div style={{background:"#333",width:"100%",height:"200px"}}></div>*/}
                    <div className="charts">
                        <DashboardOrderChart className="chart" />
                    </div>
                    {/*<div className="order__progresss-info">
                        <div style={{fontSize:"14px"}}>On Delivery(15%) <Progress value={15} /></div><br />
                        <div>Delievered(15%)</div><br />
                        <div>Cancelled(15%)</div><br />
                    </div>*/}
                    {/*<div style={{background:"#f9f9f9",width:"100%",height:"200px"}}></div>*/}
                    {/*<div className="progress-data" style={{width:"100%"}}>
                        <div><Progress value="15" /></div><br />
                        <div><Progress value="15" /></div><br />
                        <div><Progress value="15" /></div><br />
                    </div>*/}
            </div>
            {/*<div className="dashboard__order__chart-data">
                <div className="chart-info">
                    <div className="charts">
                        <DashboardOrderChart className="chart" />
                    </div>
                </div>
                <div className="order__progresss-info">
                    <div>On Delivery(15%)</div>
                    <div>Delievered(15%)</div>
                    <div>Cancelled(15%)</div>
                </div>
                <div className="progress-data">
                    <div><Progress value={75} /></div>
                    <div><Progress value={50} /></div>
                    <div><Progress value={15} /></div>
                </div>
            </div>*/}

        </div>
    )
}
export default DashboardOrderSummary