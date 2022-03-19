import React from "react"
import { useSelector } from "react-redux"

import { Container, Card, Flexbox, Restrainer } from "../styles/constants/Constants"
import CardItem from "./CardItem"

const Home = () => {
    const Total = useSelector((state) => state.Todo.value)

    return (
        <>
            <Container Bg="#E6E9ED">
                <Restrainer>
                    <Card>

                        <Flexbox align="center" justify="space-between" mdir="row">
                            <h3 className="display__text">Xdome ToDo Application by
                                <span> <a style={{ color: "inherit", textAlign: "center" }} href="https://blyncnov.com">blyncnov</a></span>
                            </h3>
                        </Flexbox>
                    </Card>

                    <br />
                    <h2>Your Todo Item  &nbsp;({Total}) &nbsp;</h2>

                    <CardItem />
                </Restrainer>
            </Container>

        </>
    )
}

export default Home