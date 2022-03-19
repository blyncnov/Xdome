import React, { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { AddTodo } from "../redux/reducers/TodoSlice.js"

import { Container, Card, Restrainer } from "../styles/constants/Constants"
import { InputeContainer } from "../styles/styled/Input"


const AddForm = ({ showAddForm, showHandler }) => {
    const dispatch = useDispatch()
    const CardList = useSelector((state) => state.Todo.lists)

    const subjectRef = useRef()
    const descriptionRef = useRef()

    const handleSubmission = (event) => {
        event.preventDefault();
        showHandler(!showAddForm);


        const Subject = subjectRef.current.value;
        const Description = descriptionRef.current.value;

        const TodoValue = {
            id: CardList.length + 1,
            Subject,
            Description
        }

        dispatch(AddTodo(TodoValue))

    }

    return (
        <>
            <Container Bg="transparent" showAddForm={showAddForm}>
                <Restrainer >
                    <Card>
                        <h4> Add New Item </h4>
                        <InputeContainer className="div">
                            <form onSubmit={handleSubmission}>
                                <input type="text" placeholder="Add Subject" required ref={subjectRef} />
                                <input type="text" placeholder="Add Todo Item" required ref={descriptionRef} />
                                <button type="submit">Add Todo</button>
                            </form>
                        </InputeContainer>
                    </Card>
                </Restrainer>
            </Container>
        </>
    )
}

export default AddForm