import React,{useState} from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Table } from 'reactstrap'
import { FiMoreHorizontal } from 'react-icons/fi'
import {BiChevronsLeft,BiChevronsRight} from 'react-icons/bi'

function CustomerTable() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return(
        <div className="customer-table">
            <Table style={{background:"#fff",borderRadius:"10px",boxShadow:"0 5px 20px rgba(0,0,0,0.08)"}}>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Join Date</th>
                        <th>Customer Name</th>
                        <th>Location</th>
                        <th>Total Spent</th>
                        <th>Last Order</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">C-004560</th>
                        <td>26 March 2020,12:42 AM</td>
                        <td>James</td>
                        <td>Corner Street 5th London</td>
                        <td>$164.52</td>
                        <td>$64.02</td>
                        <td>
                            <Dropdown direction="left" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle  tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}>
                                    <FiMoreHorizontal style={{cursor:"pointer"}} />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem style={{color:"#2f4cdd"}}>View Detail</DropdownItem>
                                    <DropdownItem>Edit</DropdownItem>
                                    <DropdownItem>Delete</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">C-004561</th>
                        <td>22 March 2020,12:42 AM</td>
                        <td>John</td>
                        <td>22nd Street 5th London</td>
                        <td>$82.46</td>
                        <td>$42.85</td>
                        <td>
                            <Dropdown direction="top" isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle  tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}>
                                    <FiMoreHorizontal style={{cursor:"pointer"}} />
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem style={{color:"#2f4cdd"}}>View Detail</DropdownItem>
                                    <DropdownItem>Edit</DropdownItem>
                                    <DropdownItem>Delete</DropdownItem>
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
export default CustomerTable