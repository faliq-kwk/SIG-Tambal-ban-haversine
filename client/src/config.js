import axios from "axios";

export const axiosInstance = axios.create({
     baseURL : "https://gisban.herokuapp.com/api"
})