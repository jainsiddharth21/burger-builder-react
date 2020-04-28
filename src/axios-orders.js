import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-ac0a0.firebaseio.com/'
});

export default instance;