import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://vuecourse-bbdb1.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance
