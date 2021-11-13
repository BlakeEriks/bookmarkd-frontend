import { useState } from "react"
import { Navigate } from "react-router"
import useUserActions from "../services/userActions"
import { useAuthState } from "../state/Auth"

const Login = () => {

    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})
    const [badLogin, setBadLogin] = useState(false)
    const [auth] = useAuthState()

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await userActions.login({...form})
        }
        catch (err) {
            setBadLogin(true)
        }
    }

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        auth ? <Navigate to="/home" /> :
        <div>
            <form onSubmit={handleSubmit} action="/login" method="post">
                <fieldset>
                    <legend>Login</legend>

                    <label>
                        Username: <input type="text" name="username" value={form.username} onChange={onChange} required></input>
                    </label>

                    <label>
                        Password: <input type="password" name="password" value={form.password} onChange={onChange} required></input>
                    </label>

                    <input type="submit" value="login"></input>
                </fieldset>
                {badLogin &&
                <div>
                    Error: Invalid Login
                </div>}
            </form>
        </div>

        )
}

export default Login