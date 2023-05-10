import axios from "axios";

class UserApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "https://localhost:7019/api/secure"
        });
    }

    async getUser(token) {
        return await this.#axios.get("/get-user", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }
}

export default UserApiWorker;