import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Cuando quiero tener una URL base
//Si dejo comentada la linea de la URL, el unico request que va a funcionar es el de Blog.js porque solo la configure en axios.js
//y la uso en Blog.js
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-type'] = 'application/json';

//Los interceptor sirven para ejecutar funciones cada vez que se hace un request o se recibe un response
axios.interceptors.request.use(request => {
    console.log(request);
    //Siempre se debe retornar el request porque sino lo estas bloqueando
    //Se puede editar el request aca, por ejemplo el header, etc
    return request;
}, error => {
    console.log(error);
    //Siempre retornar Promise.reject(error);
    //Se rechaza la promesa para poder continuar atrapando los catch de la aplicacion, sino se bloquea aca
    //Este error se puede dar a muy grandes rasgos como por ejemplo error de conexion
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
