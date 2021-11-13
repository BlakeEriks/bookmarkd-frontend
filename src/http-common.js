import axios from 'axios'

export default axios.create({
    baseURL: 'https://jab-bookmarkd-backend.herokuapp.com/',
    headers: {
        'Content-type': 'application/json'
    }
})
