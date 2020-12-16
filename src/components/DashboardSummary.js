import React from "react"
import { Col, Container, Row } from "reactstrap"
import DashboardRevenue from "./DasboardRevenue"
import DashboardOrderSummary from "./DashboardOrderSummary"

function DashboardSummary(){
    return(
        <div>
            <Container fluid={true} style={{marginTop:"30px"}}>
                <Row>
                    <Col>
                        <DashboardOrderSummary />
                    </Col>
                    <Col>
                        <DashboardRevenue />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DashboardSummary