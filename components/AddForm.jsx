import React from "react"

import { Container, Card, Flexbox, Restrainer, Logo } from "../styles/constants/Constants"
import { InputeContainer } from "../styles/styled/Input"

const AddForm = ({ showAddForm, showHandler }) => {

    const handleSubmission = (event) => {
        event.preventDefault();

        showHandler(!showAddForm);

    }

    return (
        <>
            <Container Bg="transparent" showAddForm={showAddForm}>
                <Restrainer >
                    <Card>
                        <h4> Add New Item </h4>
                        <InputeContainer className="div">
                            <form onSubmit={handleSubmission}>
                                <input type="text" placeholder="Add Subject" />
                                <input type="text" placeholder="Add Todo Item" />
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