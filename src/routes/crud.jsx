import '../App.css';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import CrudForm from '../components/crudForm';

export default function Crud() {
    const [appMainPage, setAppMainPage] = useState(true)
    const [appAddPage, setAppAddPage] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [selectedRow, setSelectedRow] = useState({})
    const [dataList, setDataList] = useState([])

    const [arrayDummy, setArrayDummy] = useState([
        { no: 1, name: 'John Doe', age: 23 },
        { no: 2, name: 'Steven Loo', age: 289 },
        { no: 3, name: 'Annas Sigit Adityo Mulyo', age: 25 },
        // { no: 4, name: 'Alice Smith', age: 45 },
        // { no: 5, name: 'Bob Johnson', age: 32 },
        // { no: 6, name: 'Eva Davis', age: 60 },
        // { no: 7, name: 'Chris Brown', age: 28 },
        // { no: 8, name: 'Olivia Taylor', age: 35 },
        // { no: 9, name: 'Daniel White', age: 42 },
        // { no: 10, name: 'Sophia Anderson', age: 38 },
        // { no: 11, name: 'Michael Lee', age: 49 },
        // { no: 12, name: 'Emma Harris', age: 27 },
        // { no: 13, name: 'Andrew Wilson', age: 56 },
        // { no: 14, name: 'Grace Miller', age: 33 },
        // { no: 15, name: 'Matthew Turner', age: 41 },
        // { no: 16, name: 'Ava Walker', age: 29 },
        // { no: 17, name: 'Samuel Wright', age: 48 },
        // { no: 18, name: 'Lily Martinez', age: 26 },
        // { no: 19, name: 'William Davis', age: 30 },
        // { no: 20, name: 'Sophie Scott', age: 44 },
        // { no: 21, name: 'Henry Thompson', age: 31 },
        // { no: 22, name: 'Zoe Hall', age: 37 },
        // { no: 23, name: 'Joseph Harris', age: 55 },
        // { no: 24, name: 'Charlotte Baker', age: 34 },
        // { no: 25, name: 'David Robinson', age: 43 },
        // { no: 26, name: 'Mia Murphy', age: 39 },
        // { no: 27, name: 'Ethan Adams', age: 22 },
        // { no: 28, name: 'Ava Cooper', age: 47 },
        // { no: 29, name: 'Jack Parker', age: 36 },
        // { no: 30, name: 'Sophia Mitchell', age: 50 },
    ])

    const handleSearch = () => {
        setDataList(arrayDummy.filter((val) => {
            return val.name.toLowerCase().includes(searchValue.toLowerCase())
        }))
    }
    useEffect(() => {
        setDataList(arrayDummy);
    }, [arrayDummy])

    return (
        <>            
            {
                appMainPage && (
                    <Container>
                        <Row>
                            <Col xs='5'>
                                <Label for="search">Search</Label>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: '20px' }}>
                            <Col xs='3'>
                                <Input
                                    id="search"
                                    name="search"
                                    placeholder="Type here..."
                                    type="text"
                                    autoComplete="off"
                                    onChange={e => {
                                        setSearchValue(e.target.value);
                                    }}
                                    onKeyDown={e => e.key === 'Enter' ? handleSearch() : null}
                                />
                            </Col>
                            <Col xs='1'>
                                <Button onClick={() => handleSearch()}>Search</Button>
                            </Col>
                            <Col>
                                <Button style={{ backgroundColor: '#007BFF' }} onClick={() => {
                                    setIsEdit(false)
                                    setAppMainPage(false)
                                    setAppAddPage(true)
                                }}>Add</Button>
                            </Col>
                        </Row>
                        <Table style={{ tableLayout: 'fixed', width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th style={{ textAlign: 'end' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataList.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.no}</td>
                                            <td>{val.name}</td>
                                            <td>{val.age}</td>
                                            <td style={{ textAlign: 'end' }}>
                                                <Button onClick={() => {
                                                    setIsEdit(true)
                                                    setSelectedRow(val)
                                                    setAppMainPage(false)
                                                    setAppAddPage(true)
                                                }} style={{ backgroundColor: '#FFC107', border: 'none' }}>Edit</Button>
                                                <Button onClick={() => {
                                                    if (window.confirm("Are you sure want to delete?") === true) {
                                                        const newArrayDummy = [...arrayDummy]
                                                        newArrayDummy.splice(key, 1)
                                                        setArrayDummy(newArrayDummy)
                                                    }
                                                }} style={{ backgroundColor: '#DC3545', marginLeft: '10px', border: 'none' }}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Container>
                )
            }
            {
                appAddPage && (
                    <CrudForm
                        setArrayDummy={setArrayDummy}
                        arrayDummy={arrayDummy}
                        setAppMainPage={setAppMainPage}
                        appAddPage={appAddPage}
                        setAppAddPage={setAppAddPage}
                        isEdit={isEdit}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                )
            }
        </>
    )
}