import axios from "axios"

const API = axios.create({
    baseURL: "http://localhost:3001/" //'https://fut-7ac88415d96b.herokuapp.com'
});

export{API}