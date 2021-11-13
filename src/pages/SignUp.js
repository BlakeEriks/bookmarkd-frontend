import { useState } from "react"
import { Navigate } from "react-router"
import useUserActions from "../services/userActions"
import { useAuthState } from "../state/Auth"

const SignUp = () => {

    const userActions = useUserActions()
    const [form, setForm] = useState({username: '', password: ''})
    const [err, setErr] = useState(false)
    const [auth] = useAuthState()

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await userActions.register({...form})
        }
        catch (err) {
            setErr(true)
        }
    }

    const onChange = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        auth ? <Navigate to="/home" /> :
        <div>
            <form action="/signup" method="post" onSubmit={handleSubmit}>
                <fieldset>
                <legend>Sign Up Here</legend>

                <label>
                    Desired Username: <input type="text" name="username" value={form.username} placeholder="username" onChange={onChange} required></input>
                </label>

                <label>
                    Password: <input type="password" name="password" value={form.password} placeholder= "password" onChange={onChange} required></input>
                </label>

                <input type="submit" value="Create Account"></input>
                </fieldset>
                {err &&
                <div>
                    Username taken. Please pick another.
                </div>}
            </form>
        </div>
    )
}

export default SignUp