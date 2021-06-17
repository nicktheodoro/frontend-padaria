import axios from "axios";

const API = axios.create({baseURL: "https://padaria-nicolas.herokuapp.com"});

export default API;