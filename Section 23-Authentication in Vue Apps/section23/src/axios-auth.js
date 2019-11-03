import axios from 'axios';

//https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
});

//instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
