import useHttp from "../http";
import { useAuthState, useUserState } from "../state/Auth";

const useUserActions = () => {
    
    const http = useHttp()
    const [auth, setAuth] = useAuthState()
    const [user, setUser] = useUserState()
    const API_BASE_URL = process.env.REACT_APP_API_URL
    
    const login = ({ username, password }) => {
        return http.post(`${API_BASE_URL}/authenticate`, {username, password})
            .then( data => {
                const {token, username} = data
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('username', JSON.stringify(username));
                setAuth(token)
                setUser(username)
            })
    }

    const register = ({ username, password }) => {
        return http.post(`${API_BASE_URL}/register`, { username, password })
            .then( data => {
                const {token, username} = data
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('username', JSON.stringify(username));
                setAuth(token)
                setUser(username)
            })
    }

    const logout = () => {
        http.get(`${API_BASE_URL}/logout`)
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setAuth(null)
    }

    return {
        login,
        logout,
        register
    }
}

export default useUserActions