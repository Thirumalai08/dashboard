import React from 'react'
import {Row,Col, Card, Container} from 'reactstrap'
import {ImMug} from 'react-icons/im'
import {BiDollar} from 'react-icons/bi'
import {GrNotes} from 'react-icons/gr'
import {BsPeople} from 'react-icons/bs'

function DashboardCards(){
    return(
        <div>
            <Container fluid={true}>
            <Row>
                <Col md="3">
                    <Card  className="d-flex">
                        <div className="card__img">
                            <ImMug />
                        </div>
                        <div className="card__info">
                            <h4>56</h4>
                            <h5>Total Menu</h5>
                            <p className="text-muted">4% (30 days)</p>
                        </div>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="d-flex" style={{width:"18rem"}}>
                        <div className="card__img">
                            <BiDollar />
                        </div>
                        <div className="card__info">
                            <h4>126k</h4>
                            <h5>Total Revenue</h5>
                            <p className="text-muted">26% (30 days)</p>
                        </div>
                    </Card>
                </Col>
                <Col md="3">
                    <Card style={{width:"18rem"}}>
                        <div className="card__img">
                            <GrNotes />
                        </div>
                        <div className="card__info">
                            <h4>279</h4>
                            <h5>Total Orders</h5>
                            <p className="text-muted">4% (30 days)</p>
                        </div>
                    </Card>
                </Col>
                <Col md="3">
                    <Card style={{width:"18rem"}}>
                        <div className="card__img">
                            <BsPeople />
                        </div>
                        <div className="card__info">
                            <h4>65</h4>
                            <h5>Total Customers</h5>
                            <p className="text-muted">4% (30 days)</p>
                        </div>
                    </Card>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default DashboardCards