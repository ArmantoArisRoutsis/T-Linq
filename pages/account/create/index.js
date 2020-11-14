import Head from 'next/head'
import { Alert, Button, Container, Row } from 'shards-react'
import { Form, FormInput, FormGroup } from "shards-react";
import Title from '../../../components/title';
import { useState } from 'react';
import CreateAccount from '../../../services/CreateAccount';
import { Layout } from '../../../components/layout';

export default function AccountCreate() {

    const [error, setError] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Head>
                <title>Linq : Login</title>
            </Head>

            <Layout>
                <Container>

                    <Title title='Create your account' description='Welcome on TryLinq' />
                
                    {error != '' && <Alert theme="danger">This email is already in use{error}</Alert>}

                    <Form>
                        <FormGroup>
                            <label htmlFor="#email">Email</label>
                            <FormInput 
                                invalid={email.length != 0} 
                                type="email" 
                                id="#email" 
                                placeholder="Email" 
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                            <span style={{color:'#c41c3c', fontSize:'0.8em'}}>This email is already in use</span>
                        </FormGroup> 
                        <FormGroup>
                            <label htmlFor="#password">Password</label>
                            <FormInput 
                                invalid={password.length != 0 && ValidatePassword(password)} 
                                type="password" 
                                id="#password" 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                />
                        </FormGroup> 
                        <Button onClick={() => {
                            console.log({email, username, firstname, lastname, password, repeatPassword})
                            CreateAccount({email, username, firstname, lastname, password}, (err) => setError(err.error), (done) => alert("ok"))
                        }}>Create to my account</Button>
                    </Form>
                </Container>
            </Layout>

        </>
    )
}

function ValidatePassword(password) {
    return password.length < 5
} 

function ValidateEmail(mail) {
    return !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
}