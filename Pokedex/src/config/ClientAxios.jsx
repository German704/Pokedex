import axios from "axios";

export const ClientAxios = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`
})
