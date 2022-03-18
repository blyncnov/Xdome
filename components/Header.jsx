import React from "react"

import { Container, Card, Flexbox, Restrainer, Logo, Circle } from "../styles/constants/Constants"

import { FiPlus } from "react-icons/fi"

const Header = () => {
    return (
        <>
            <Container Bg="blue" style={{ borderRadius: "0% 0 10% 10% " }}>
                <Restrainer>

                    <Flexbox align="center" justify="space-between" p="2em 0" color="white" mdir="row">
                        <Logo className="logo">
                            <h1>Xdome</h1>
                        </Logo>
                        <Circle Bg="white">
                            <FiPlus style={{ color: "black", fontWeight: "900", fontSize: "2em" }} />
                        </Circle>
                    </Flexbox>

                </Restrainer>
            </Container>

        </>
    )
}

export default Header