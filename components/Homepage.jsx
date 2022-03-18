import React from "react"

import { Container, Card, Flexbox, Restrainer, Button } from "../styles/constants/Constants"
import CardItem from "./CardItem"

const Home = () => {
    return (
        <>
            <Container Bg="#E6E9ED">
                <Restrainer>
                    <Card>

                        <Flexbox align="center" justify="space-between" mdir="row">
                            <h3 className="display__text">Xdome ToDo Application by Blyncnov </h3>
                        </Flexbox>


                    </Card>

                    <br />
                    <h2>Your Todo Item</h2>

                    <CardItem />
                </Restrainer>
            </Container>

        </>
    )
}

export default Home