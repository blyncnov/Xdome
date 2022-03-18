import React from "react"

import { Container, Card2, Flexbox, Restrainer, Button } from "../styles/constants/Constants"
import { MdAutoDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"

const CardItem = () => {
    const [Finished, setFinished] = React.useState(false)

    const FinishedHandler = () => {
        setFinished(!Finished);
        if (Finished) {
            console.log("you have unread it");
        } else {
            console.log("you have read it");
        }
    }

    return (
        <>
            <Card2 Bg="transparent">

                <Container Bg="transparent">
                    <Flexbox align="center" justify="space-between" mdir="row" className="showcolor">
                        <h3 className={Finished ? "todo__list finished" : "todo__list"}>Go to the Gym dummas</h3>
                        <Flexbox align="center" justify="space-between" wdir="row">
                            <input onClick={FinishedHandler} type="checkbox" placeholder="Add Todo Item" />
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
                        <h3 className="todo__list">Finish React 2pm to 4pm </h3>
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
                        <h3 className="todo__list">Attend Funaab Convocation </h3>
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
                        <h3 className="todo__list">Text your Girlfriend</h3>
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
                        <h3 className="todo__list">Read Manga &ldquo;Demon Slayer&ldquo; </h3>
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
                        <h3 className="todo__list">Go Pick the Children </h3>
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
                        <h3 className="todo__list">Play Football for a while </h3>
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

