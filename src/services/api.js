import axios from "axios";

const API = axios.create({baseURL: "https://padariaseuzeapi.herokuapp.com"});

export default API;