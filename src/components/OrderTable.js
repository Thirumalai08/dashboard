import React, { useState } from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'reactstrap'
import { FiMoreHorizontal } from 'react-icons/fi'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {ImCancelCircle} from 'react-icons/im'
import {BiChevronsLeft,BiChevronsRight} from 'react-icons/bi'

function OrderTable(){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return(
        <div className="order-table">
            <Table style={{background:"#fff",borderRadius:"10px",boxShadow:"0 5px 20px rgba(0,0,0,0.08)"}}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Location</th>
                        <th>Amount</th>
                        <th>Status Order</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">5552351</th>
                        <td>26 March 2020,12:42 AM</td>
                        <td>James Witcwicky</td>
                        <td>Corner Street 5th London</td>
                        <td>$164.52</td>
                        <td>New Order</td>
                        <td>
                            <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle  tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}>
                                    <FiMoreHorizontal style={{cursor:"pointer"}} />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem style={{color:"#2f4cdd"}}><IoMdCheckmarkCircleOutline style={{fontSize:"22px"}} />&nbsp;Accept Order</DropdownItem>
                                    <DropdownItem style={{color:"#F24242"}}><ImCancelCircle style={{fontSize:"20px"}} />&nbsp;Reject Order</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5552352</th>
                        <td>26 March 2020,12:42 AM</td>
                        <td>James Witcwicky</td>
                        <td>Corner Street 5th London</td>
                        <td>$164.52</td>
                        <td>On Delivery</td>
                        <td>
                            <Dropdown direction="top" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle  tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}>
                                    <FiMoreHorizontal style={{cursor:"pointer"}} />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem style={{color:"#2f4cdd"}}><IoMdCheckmarkCircleOutline style={{fontSize:"22px"}} />&nbsp;Accept Order</DropdownItem>
                                    <DropdownItem style={{color:"#F24242"}}><ImCancelCircle style={{fontSize:"20px"}} />&nbsp;Reject Order</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr> {/* Another Status Delivered */}
                </tbody>
            </Table>
            <div className="results-pagination">
                <div className="result">
                    <p>Showing CurrentItems with Total Items</p>
                </div>
                <div className="pagination">
                    <Button color="secondary"><BiChevronsLeft style={{fontSize:"24px"}} />&nbsp;Previous</Button>
                    <Button color="secondary" className="btn-next">Next&nbsp;<BiChevronsRight style={{fontSize:"24px"}} /></Button>
                </div>
            </div>
        </div>
    )
}
export default OrderTable