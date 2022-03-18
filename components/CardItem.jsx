import React from "react"

import { Container, Card2, Flexbox, Restrainer, Button } from "../styles/constants/Constants"
import { MdAutoDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"

const CardItem = () => {
    return (
        <>
            <Card2 Bg="transparent">

                <Container Bg="transparent">
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Go to the Gym dummas</h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                            <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

                <br />
                <hr />
                <br />

                <Container Bg="transparent" >
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Finish React 2pm to 4pm </h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                            <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

                <br />
                <hr />
                <br />

                <Container Bg="transparent" >
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Attend Funaab Convocation </h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                           <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

                <br />
                <hr />
                <br />

                <Container Bg="transparent" >
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Text your Girlfriend</h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                           <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

                <br />
                <hr />
                <br />

                <Container Bg="transparent" >
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Read Manga &ldquo;Demon Slayer&ldquo; </h3>
                        <Flexbox align="center" justify="space-between" mdir="row" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                           <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

                <br />
                <hr />
                <br />

                <Container Bg="transparent" >
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Go Pick the Children </h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                           <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

                <br />
                <hr />
                <br />

                <Container Bg="transparent" >
                    <Flexbox align="center" justify="space-between" mdir="row">
                        <h3 className="display__text">Play Football for a while </h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input type="checkbox" placeholder="Add Todo Item" />
                            <MdAutoDelete />
                           <FiEdit />
                        </Flexbox>
                    </Flexbox>
                </Container>

            </Card2>

        </>
    )
}

export default CardItem
