import axios from 'axios';

//Crea una instancia de axios, como una copia del objeto axios
//Se pueden crear multiples copias
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

//Esto sobreescribe cualquier request enviado con esta instancia
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;

//Como esta instancia la uso solo en Blog.js, la linea:
    //instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
//solo va a aparecer en el request de un Blog
//El componente Blog.js no loguea los interceptors porque estos fueron definido globalmente en index.js,
//y aca lo estoy sobrescribiendo