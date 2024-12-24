import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import "./Entry.style.css";
import {LoginForm} from "./Login.comp.js";

export const Entry = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    return <div className='entry-page bg-info'>
         <Container className='Jumbotron'>
            <LoginForm/>
         </Container>
    </div>;
}