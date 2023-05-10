import axios from "axios";

class AuthApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "https://localhost:7019/api/auth/"
        });
    }

    async authenticateUser(userCredentials) {
        return await this.#axios.post("/authenticate", userCredentials);
    }
}

export default AuthApiWorker;