import React from "react"

import { Container, Card, Flexbox, Restrainer, Logo } from "../styles/constants/Constants"
import { InputeContainer } from "../styles/styled/Input"

const AddForm = () => {
    return (
        <>
            <Container Bg="transparent" >
                <Restrainer >
                    <Card>
                        <h4> Add New item </h4>
                        <InputeContainer className="div">
                            <input type="text" placeholder="Add Subject" />
                            <input type="text" placeholder="Add Todo Item" />
                            <button type="submit">Add Todo</button>
                        </InputeContainer>
                    </Card>
                </Restrainer>
            </Container>
        </>
    )
}

export default AddForm