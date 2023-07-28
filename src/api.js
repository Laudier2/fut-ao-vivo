import axios from "axios"

const API = axios.create({
    baseURL: 'https://fut-7ac88415d96b.herokuapp.com' //"http://localhost:3001/"
});

export{API}