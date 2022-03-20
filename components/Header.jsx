import React from "react"

import { Container, Card, Flexbox, Restrainer, Logo, Circle } from "../styles/constants/Constants"
import { useDispatch, useSelector } from "react-redux"

import { ShowAddForm } from "../redux/reducers/TodoSlice.js"

import { FiPlus } from "react-icons/fi"
import { FaTimes } from "react-icons/fa"
import AddForm from "./AddForm"

const Header = () => {
    const dispatch = useDispatch()
    const show = useSelector((showed) => showed.Todo.show)

    const showAddFormHandler = () => {
        dispatch(ShowAddForm())
    }

    return (
        <>
            <Container Bg="blue" style={{ borderRadius: "0% 0 10% 10% " }}>
                <Restrainer>

                    <Flexbox align="center" justify="space-between" p="2em 0" color="white" mdir="row">
                        <Logo className="logo">
                            <h1 >Xdome</h1>
                        </Logo>
                        <Circle Bg="white" onClick={showAddFormHandler}>
                            {show ? <FiPlus style={{ color: "black", fontWeight: "900", fontSize: "2em" }} /> :
                                <FaTimes style={{ color: "black", fontWeight: "900", fontSize: "2em" }} />}
                        </Circle>
                    </Flexbox>

                </Restrainer>
            </Container>
            <AddForm showAddForm={show} />
        </>
    )
}

export default Header