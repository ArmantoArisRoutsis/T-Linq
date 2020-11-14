import Head from "next/head"
import { useState } from "react"
import { Button, Container, Form, FormGroup, FormInput } from "shards-react"
import { Layout } from "../../../components/layout"
import Title from "../../../components/title"


export default function AccountCreateMore() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')

    return (
        <>
            <Head>
                <title>Linq : Login</title>
            </Head>

            <Layout>
                <Container>
                    <Title title='Tell us more about you' description='We like to know more about our customers, please let us know your name' />

                    <Form>
                        <FormGroup>
                            <label htmlFor="#username">Username</label>
                            <FormInput 
                                invalid={username.length != 0} 
                                type="username" 
                                id="#username" 
                                placeholder="Username" 
                                onChange={(e) => setUsername(e.target.value)} 
                                />
                        </FormGroup>  
                        <FormGroup>
                            <label htmlFor="#email">Firstname</label>
                            <FormInput 
                                invalid={firstname.length != 0} 
                                id="#firstanme" 
                                placeholder="Firstname" 
                                onChange={(e) => setFirstname(e.target.value)} 
                                />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="#lastname">Lastname</label>
                            <FormInput 
                                invalid={lastname.length != 0} 
                                type="lastname" 
                                id="#lastname" 
                                placeholder="Lastname"
                                onChange={(e) => setLastname(e.target.value)} 
                                />
                        </FormGroup> 
            


                        <p><a href='/account'>Take me to my account -- Skip this step for now</a></p>


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