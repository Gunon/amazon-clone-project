import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-2c79a/us-central1/api' //Invoke API for payment
});

export default instance;