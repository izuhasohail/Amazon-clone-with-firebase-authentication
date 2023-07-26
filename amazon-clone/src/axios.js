import axios from "axios";

const instance=axios.create({
    baseURL: 'https://us-central1-app-clone-6583c.cloudfunctions.net/api'
    /*THE API (cloud function) URL */

    //'http://127.0.0.1:5001/app-clone-6583c/us-central1/api'
});

export default instance;