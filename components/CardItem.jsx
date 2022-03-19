import React from "react"
import { useSelector } from "react-redux"

import { Container, Card2, Flexbox } from "../styles/constants/Constants"

import { MdAutoDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"


const CardItem = () => {
    const [Finished, setFinished] = React.useState(false)

    const CardList = useSelector((state) => state.Todo.lists)

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
                                <h5>{items.Subject}</h5>
                                <Flexbox align="center" justify="space-between" mdir="row" className="showcolor">
                                    <h3 className={Finished ? "todo__list finished" : "todo__list"}>{items.Description} </h3>
                                    <Flexbox align="center" justify="space-between" wdir="row">
                                        <input type="checkbox" placeholder="Add Todo Item" />
                                        <MdAutoDelete style={{ fontSize: "1.5em" }} />
                                        <FiEdit style={{ fontSize: "1.5em" }} />
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

