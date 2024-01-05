import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const CrudForm = (props) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setSelectedRow((prevSelectedRow) => {
            return ({
                ...prevSelectedRow,
                [name]: value,
            })
        })
    }
    const onClick = (no, name, age) => {
        props.setArrayDummy(props.arrayDummy.map(item =>
            item.no === no ? { ...item, name, age } : item
        ))
        props.setAppAddPage(false)
        props.setAppMainPage(true)
    }
    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        {...(props.isEdit ? { value: props.selectedRow.name } : {})}
                        {...(props.isEdit) ? { onChange: handleChange } : {}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">
                        Age
                    </Label>
                    <Input
                        id="age"
                        name="age"
                        type="number"
                        {...(props.isEdit ? { value: props.selectedRow.age } : {})}
                        {...(props.isEdit) ? { onChange: handleChange } : {}}
                    />
                </FormGroup>
                <Button onClick={() => {
                    if (document.getElementById("name").value.trim() === "") {
                        alert("Name is empty. Please enter a name.")
                    } else if (document.getElementById("age").value.trim() === "") {
                        alert("Age is empty. Please enter a age.")
                    } else if (isNaN(document.getElementById("age").value.trim())) {
                        alert("Please enter a valid age.")
                    } else {
                        if (props.isEdit) {
                            onClick(props.selectedRow.no, document.getElementById("name").value, document.getElementById("age").value)
                        } else {
                            props.arrayDummy.push(
                                {
                                    no: props.arrayDummy.length + 1,
                                    name: document.getElementById("name").value.trim(),
                                    age: document.getElementById("age").value.trim()
                                }
                            )
                            props.setArrayDummy([...props.arrayDummy])
                            props.setAppMainPage(true)
                            props.setAppAddPage(false)
                        }
                    }
                }} style={{ backgroundColor: '#007BFF', border: 'none' }}>
                    Submit
                </Button>
                <Button onClick={() => {
                    props.setAppMainPage(true)
                    props.setAppAddPage(false)
                    props.setSelectedRow({})
                }} style={{ marginLeft: '20px', backgroundColor: '#DC3545', border: 'none' }}>
                    Back
                </Button>
            </Form>
        </Container>
    )
}

CrudForm.propTypes = {
    setArrayDummy: PropTypes.any,
    arrayDummy: PropTypes.any,
    setAppMainPage: PropTypes.any,
    appAddPage: PropTypes.any,
    setAppAddPage: PropTypes.any,
    isEdit: PropTypes.any,
    selectedRow: PropTypes.any,
    setSelectedRow: PropTypes.any
}

export default CrudForm