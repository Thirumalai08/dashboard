import React from 'react'
import { Container } from 'reactstrap'
import DashboardCards from '../components/DashboardCards'
import DashboardStatus from '../components/DashboardStatus'

function Dashboard(){
    return(
        <main>
            <Container fluid={true}>
                <DashboardStatus />
                <DashboardCards />
            </Container>
        </main>
    )
}
export default Dashboard