import React from "react"

import { Container, Card, Flexbox, Restrainer, Logo, Circle } from "../styles/constants/Constants"


const Footer = () => {
    return (
        <>
            <Container Bg="#eee" style={{ borderRadius: "10% 5% 0% 0 ", padding: "1em 0" }}>
                <Restrainer style={{ textAlign: "center" }}>


                    <h4> Xdome</h4>
                    <h6>Best ToDo application by
                        <span> <a style={{ color: "grey" }} href="https://blyncnov.com">blyncnov</a></span>
                    </h6>


                </Restrainer>
            </Container>

        </>
    )
}

export default Footer