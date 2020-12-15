import React from 'react'
import { Container } from 'reactstrap'
import OrderStatus from '../components/OrderStatus'
import OrderTable from '../components/OrderTable'

function Orders() {
    return(
        <main>
            <Container fluid={true}>
                <OrderStatus />
                <OrderTable />
            </Container>
        </main>
    )
}
export default Orders