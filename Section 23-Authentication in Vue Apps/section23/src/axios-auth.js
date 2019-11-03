import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://vuecourse-bbdb1.firebaseio.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
