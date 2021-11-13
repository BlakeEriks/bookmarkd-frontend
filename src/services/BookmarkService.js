import http from '../http'

const BookmarkService = {

    getAll: () => {
        return http.get('/bookmarks')
    },

    get: id => {
        return http.get(`/bookmarks/${id}`)
    },

    create: user => {
        return http.post('/bookmarks', user)
    },

    update: (id, user) => {
        return http.put(`/bookmarks/${id}`, user)
    },

    delete: id => {
        return http.delete(`/bookmarks/${id}`)
    }

}

export default BookmarkService