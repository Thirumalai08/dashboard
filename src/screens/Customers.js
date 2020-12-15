import React from 'react'
import { Container } from 'reactstrap'
import CustomerStatus from '../components/CustomerStatus'
import CustomerTable from '../components/CustomerTable'

function Customers(){
    return(
        <main>
            <Container fluid={true}>
                <CustomerStatus />
                <CustomerTable />
            </Container>
        </main>
    )
}
export default Customers