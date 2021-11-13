import { useAuthState } from "./state/Auth";
import { createBrowserHistory } from 'history';

const useHttp = () => {

    const [auth, setAuth] = useAuthState()
    const history = createBrowserHistory();

    const request = method => {
        return (url, body) => {
            const requestOptions = {
                method,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            if (body) {
                requestOptions.body = JSON.stringify(body)
            }
            return fetch(url, requestOptions).then(handleResponse)
        }
    }

    const handleResponse = res => {
        return res.text().then(text => {

            const data = text && JSON.parse(text)

            if (res.status !== 200) {
                if ([401, 403].includes(res.status) && auth?.token) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    setAuth(null);
                    history.push('/login');
                }

                const error = (data && data.message) || res.statusText
                return Promise.reject(error)
            }

            return data
        })
    }

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    }
}

export default useHttp