import React from 'react';
import {Button} from 'react-bootstrap';
import {Container,Row,Col,Form} from 'react-bootstrap';

export const LoginForm = () => {
    return (
        <Container className = "form-container">
            <Row>
                <Col md="auto">
                    <h1>Client Login</h1>
                    <hr/>
                    <Form>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name = "email" placeholder = "Enter Email" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name = "password" placeholder = "password" required />
                        </Form.Group>

                        <Button className = 'btnLogin'  type = "submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}