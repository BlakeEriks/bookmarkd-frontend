import http from '../http-common'

const BookmarkService = {

    getAll: () => {
        http.get('/bookmarks')
    },

    get: id => {
        http.get(`/bookmarks/${id}`)
    },

    create: user => {
        http.post('/bookmarks', user)
    },

    update: (id, user) => {
        http.put(`/bookmarks/${id}`, user)
    },

    delete: id => {
        http.delete(`/bookmarks/${id}`)
    }

}

export default BookmarkService