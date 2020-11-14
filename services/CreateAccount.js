import request from "superagent"
import { API_SERVER } from "../config"

function CreateAccount(data, errorCallback, done) {

    request
        .post(`${API_SERVER}/account`)
        .set('Content-Type', 'application/json')
        .send(data)
        .then((rep) => done(rep))
        .catch((error) => {
            console.log(error)
            errorCallback("error.response")
        })

}

export default CreateAccount