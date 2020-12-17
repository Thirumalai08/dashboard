import React from 'react'
import { Container } from 'reactstrap'
import AnalyticsOrders from '../components/AnalyticsOrders'
import AnalyticsStatus from '../components/AnalyticsStatus'

function Analytics(){
    return(
        <main>
            <Container fluid={true}>
                <AnalyticsStatus />
                <AnalyticsOrders />
            </Container>
        </main>
    )
}
export default Analytics