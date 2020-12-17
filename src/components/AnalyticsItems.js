import React from 'react'
import { Col, Row } from 'reactstrap'

function AnalyticsItems(){
    return(
        <div className="analytics__items">
            <Row>
                <Col>
                    <div className="favourite-items">
                        {/* One */}
                        <div className="details">
                            <div className="title__info">
                                <h3>Most Favourites Items</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="title__day">
                                <p>Monthly</p>
                                <p>Weekly</p>
                                <p className="active">Today</p>
                            </div>
                        </div>
                        {/* Two */}
                    </div>
                </Col>
                <Col>
                    <div className="selling-items">
                        {/* One */}
                        <div className="details">
                            <div className="title__info">
                                <h3>Most Selling Items</h3>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur</p>
                            </div>
                            <div className="title__day">
                                <p>Monthly</p>
                                <p>Weekly</p>
                                <p className="active">Today</p>
                            </div>
                        </div>
                        {/* Two */}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default AnalyticsItems