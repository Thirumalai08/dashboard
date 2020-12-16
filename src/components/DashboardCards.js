import React from 'react'
import {Row,Col,Container} from 'reactstrap'
import {ImMug} from 'react-icons/im'
import {BiDollar} from 'react-icons/bi'
import {MdAssignment} from 'react-icons/md'
import {BsPeople} from 'react-icons/bs'

function DashboardCards(){
    return(
        <div>
            <Container fluid={true}>
            <Row>
                <Col md="3">
                    <div className="main__card">
                        <div className="card__img">
                            <ImMug className="icon" />
                        </div>
                        <div className="card__info">
                            <h4>56</h4>
                            <h5>Total Menu</h5>
                            <p className="text-muted">4% (30 days)</p>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                <div className="main__card">
                        <div className="card__img">
                            <BiDollar className="icon" />
                        </div>
                        <div className="card__info" >
                            <h4 >120k</h4>
                            <h5 >Total Revenue</h5>
                            <p className="text-muted">26% (30 days)</p>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                <div className="main__card">
                        <div className="card__img">
                            <MdAssignment className="icon"/>
                        </div>
                        <div className="card__info">
                            <h4>279</h4>
                            <h5>Total Orders</h5>
                            <p className="text-muted">4% (30 days)</p>
                        </div>
                    </div>
                </Col>
                <Col md="3">
                <div className="main__card">
                        <div className="card__img">
                            <BsPeople className="icon" />
                        </div>
                        <div className="card__info">
                            <h4>65</h4>
                            <h5>Total Customers</h5>
                            <p className="text-muted">4% (30 days)</p>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default DashboardCards