import axios from "axios"

const API = axios.create({
    baseURL: "https://fut2-5b31be9117b5.herokuapp.com/" //http://localhost:3001/" //'https://fut-7ac88415d96b.herokuapp.com'
});

export{API}