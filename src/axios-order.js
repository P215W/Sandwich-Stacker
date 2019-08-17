import axios from "axios";

const instance = axios.create({
    baseURL: "https://mg-app-sandwich-stacker.firebaseio.com"
});

export default instance;