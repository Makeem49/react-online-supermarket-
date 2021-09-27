import React from "react";
import Button from "./Button.js";
import Link from "./Link.js";
import Container from "./Container.js";
import Input from "./Input.js";
import "App.css";


export default function App() {
    return (
        <> 
            <Container>
                <Button type='submit' disabled='disabled'>Submit</Button>
                <Link href='https://react-tutorial.app'>Shop Online</Link>
                <Input type='text' placeholder='Enter your message here.' ></Input>
            </Container>
        </>
    )
}