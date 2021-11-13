import http from '../http-common'

const UserService = {

    getAll: () => {
        http.get('/users')
    },

    get: id => {
        http.get(`/users/${id}`)
    },

    create: user => {
        http.post('/users', user)
    },

    update: (id, user) => {
        http.put(`/users/${id}`, user)
    },

    delete: id => {
        http.delete(`/users/${id}`)
    }

}

export default UserService