import Head from 'next/head'
import {Layout} from '../../components/layout'
import { Button, Container, Row } from 'shards-react'
import { Form, FormInput, FormGroup } from "shards-react";
import Title from '../../components/title';
import { useState } from 'react';
import { API_SERVER } from '../../config'
import request from 'superagent';
import Perks from '../../components/Perks'
import styles from '../../styles/Home.module.css'

export default function AccountEdit() {

    const [error, setError] = useState('')

    const GetToken = (email, password) => {

        request
            .post(`${API_SERVER}/login`)
            .set('Content-Type', 'application/json')
            .send({email, password})
            .then((rep) => {
                localStorage.setItem('token', rep.body.token)
            })
            .catch((err) => alert(err))

    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Head>
                <title>Linq : Login</title>
            </Head>

            {error}

            <Layout>
                <Container>
                
                    <div className="row ">
                        <div className="col-lg">
                            <Perks>
                                <div className={styles.removeperks}>
                                    <div ><h5>Quick and free sign‑up</h5><p>Enter your email address to create an account.</p></div>
                                    <div><h5>Quick and free sign‑up</h5><p>Enter your email address to create an account.</p></div>
                                    <div><h5>Quick and free sign‑up</h5><p>Enter your email address to create an account.</p></div>
                                </div>
                            </Perks>
                        </div>
                
                        <div className="col">
                            <div className={styles.spacetochildren}>
                                <Title title='Connect to you account' description='Welcome back on TryLinq' />
                                <Form>
                                    <FormGroup>
                                        <label htmlFor="#email">Email</label>
                                        <FormInput 
                                            invalid={email.length != 0 && ValidateEmail(email)} 
                                            id="#email" 
                                            placeholder="Email" 
                                            onChange={(e) => setEmail(e.target.value)} 
                                            />
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
                                    <Button disabled={ValidatePassword(password) && ValidateEmail(email)} onClick={() => GetToken(email, password)}>Login to my account</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
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