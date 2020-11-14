import { useState } from "react";
import { Button, Container, FormGroup, FormInput } from "shards-react";
import request from "superagent";
import { Layout } from "../../components/layout";
import Title from "../../components/title";
import { API_SERVER } from "../../config";

export default function ResetPassword() {

    const [email, setEmail] = useState('');

    const SendResetPassword = (email) => {

        request
            .get(`${API_SERVER}/reset-password?email=${email}`)
            .then((rep) => {
                
            })
            .catch((err) => alert(err))

    }

    return (
        <Layout>
            <Container>
                <Title title="Reset your password" description="Dude, You are having fish memory" />
                <FormGroup>
                    <label htmlFor="#email">Email</label>
                    <FormInput 
                        invalid={email.length != 0 && ValidateEmail(email)} 
                        id="#email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        />
                </FormGroup>
                <Button onClick={() => {
                    SendResetPassword(email)
                    alert(email)
                }}>Reset my password</Button>
            </Container>
        </Layout>
    )
}

function ValidateEmail(mail) {
    return !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
}