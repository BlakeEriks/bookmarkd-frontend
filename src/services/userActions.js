import useHttp from "../http";
import { useAuthState } from "../state/Auth";

const useUserActions = () => {
    
    const http = useHttp()
    const [auth, setAuth] = useAuthState()
    
    const login = ({ username, password }) => {
        return http.post('http://localhost:3000/authenticate', {username, password})
            .then( user => {
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user)
            })
    }

    const register = ({ username, password }) => {
        return http.post('http://localhost:3000/register', { username, password })
            .then( user => {
                localStorage.setItem('user', JSON.stringify(user));
                setAuth(user)
            })
    }

    const logout = () => {
        http.get('http://localhost:3000/logout')
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