import React from 'react'
import { Container } from 'reactstrap'
import AnalyticsOrders from '../components/AnalyticsOrders'
import AnalyticsStatus from '../components/AnalyticsStatus'
import AnalyticsItems from '../components/AnalyticsItems'

function Analytics(){
    return(
        <main>
            <Container fluid={true}>
                <AnalyticsStatus />
                <AnalyticsOrders />
                <AnalyticsItems />
            </Container>
        </main>
    )
}
export default Analytics