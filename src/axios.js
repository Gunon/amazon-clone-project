import axios from "axios";

const instance = axios.create({
    baseURL: '...' //Invoke API for payment
});

export default instance;