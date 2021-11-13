import useHttp from "../http";
import { useAuthState } from "../state/Auth";

const useUserActions = () => {
    
    const http = useHttp()
    const [auth, setAuth] = useAuthState()
    const API_BASE_URL = process.env.REACT_APP_API_URL
    
    const login = ({ username, password }) => {
        return http.post(`${API_BASE_URL}/authenticate`, {username, password})
            .then( user => {
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user)
            })
    }

    const register = ({ username, password }) => {
        return http.post(`${API_BASE_URL}/register`, { username, password })
            .then( user => {
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user)
            })
    }

    const logout = () => {
        http.get(`${API_BASE_URL}/logout`)
        localStorage.removeItem('user');
        setAuth(null)
    }

    return {
        login,
        logout,
        register
    }
}

export default useUserActions