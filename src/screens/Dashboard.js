import React from 'react'
import { Container } from 'reactstrap'
import DashboardCards from '../components/DashboardCards'
import DashboardCustomer from '../components/DashboardCustomer'
import DashboardStatus from '../components/DashboardStatus'
import DashboardSummary from '../components/DashboardSummary'

function Dashboard(){
    return(
        <main>
            <Container fluid={true}>
                <DashboardStatus />
                <DashboardCards />
                <DashboardSummary />
                <DashboardCustomer />
            </Container>
        </main>
    )
}
export default Dashboard