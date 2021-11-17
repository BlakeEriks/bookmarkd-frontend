import useHttp from '../http'

const useBookmarks = () => {

    const http = useHttp()
    const API_BASE_URL = process.env.REACT_APP_API_URL

    const getById = id => {
        return http.get(`${API_BASE_URL}/bookmarks/${id}`)
    }

    const get = () => {
        return http.get(`${API_BASE_URL}/bookmarks`)
    }

    const explore = () => {
        return http.get(`${API_BASE_URL}/bookmarks/explore`)
    }

    const create = bookmark => {
        return http.post(`${API_BASE_URL}/bookmarks`, bookmark)
    }

    const update = bookmark => {
        return http.put(`${API_BASE_URL}/bookmarks/${bookmark._id}`, bookmark)
    }

    const remove = id => {
        return http.delete(`${API_BASE_URL}/bookmarks/${id}`)
    }

    return {
        getById,
        get,
        explore,
        create,
        update,
        remove
    }

}

export default useBookmarks