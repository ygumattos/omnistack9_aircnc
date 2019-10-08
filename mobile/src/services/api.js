import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.37:3333' //Utilizando o link do expo ao inves de localhost
});

export default api;
