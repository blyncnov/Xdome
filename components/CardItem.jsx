import React from "react"

import { Container, Card2, Flexbox, Restrainer, Button } from "../styles/constants/Constants"
import { MdAutoDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"

import { CardList } from "../data/CardItemList"

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
                <label style={{ float: 'right' }} htmlFor="checkall">Mark All Done  &nbsp;
                    <input onClick={FinishedHandler} type="checkbox" placeholder="Add Todo Item" />

                </label>
                <br />
                <br />
                {CardList.map((items) => {
                    return (
                        <div key={items.id}>
                            <Container Bg="transparent">
                                <h5>{items.subject}</h5>
                                <Flexbox align="center" justify="space-between" mdir="row" className="showcolor">
                                    <h3 className={Finished ? "todo__list finished" : "todo__list"}>{items.description}</h3>
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
                        </div>
                    )
                })}

            </Card2>

        </>
    )
}

export default CardItem

