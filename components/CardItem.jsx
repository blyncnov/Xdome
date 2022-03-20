import React from "react"

import { useDispatch, useSelector } from "react-redux"
import { DeleteTodo, UpdateEdit, ShowAddForm } from "../redux/reducers/TodoSlice.js"

import { Container, Card2, Flexbox } from "../styles/constants/Constants"
import { MdEditOff } from "react-icons/md"
import { MdAutoDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"


const CardItem = () => {

    const dispatch = useDispatch()
    const [Finished, setFinished] = React.useState(false)

    const CardList = useSelector((state) => state.Todo.lists)
    const EditTrue = useSelector((state) => state.Todo.click)


    const FinishedHandler = () => {
        setFinished(!Finished);
        if (Finished) {
            console.log("you have unread it");
        } else {
            console.log("you have read it");
        }
    }

    const UpdateFormHandler = () => {
        console.log("you have Update an Item ");
        dispatch(UpdateEdit({}))
        dispatch(ShowAddForm({}))
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
                                        <MdAutoDelete style={{ fontSize: "1.2em", cursor: "pointer" }} onClick={() => dispatch(DeleteTodo({ id: items.id }))} />
                                        {EditTrue ? <FiEdit style={{ fontSize: "1.2em", cursor: "pointer" }} onClick={UpdateFormHandler} /> : <MdEditOff style={{ fontSize: "1.2em", cursor: "pointer" }} onClick={UpdateFormHandler} />}

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

