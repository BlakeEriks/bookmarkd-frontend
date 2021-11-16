import { useState } from "react"
import { Navigate } from "react-router"
import useUserActions from "../services/userActions"
import { useAuthState } from "../state/Auth"
import '../App.css';


import { SubTitle } from "../styles/Text"
import { LoginInput } from "../styles/Input"
import { HorizontalDivider } from "../styles/Divider"
import { WhiteButton } from "../styles/Button"
import { VerticalFlexBox } from "../styles/Boxes"


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
                <VerticalFlexBox class="container">

                    <div class="container">
                        <SubTitle>Sign Up Here</SubTitle>
                    </div>
                    <HorizontalDivider />

                    <div class="container">
                    <LoginInput type="text" name="username" value={form.username} placeholder="username" onChange={onChange} required />
                    </div>

                    <div class="container">
                    <LoginInput type="password" name="password" value={form.password} placeholder= "password" onChange={onChange} required />
                    </div>

                    <HorizontalDivider />

                    <div class="container">
                    <WhiteButton type="submit" value="Create Account">Create Account</WhiteButton>
                    </div>

                </VerticalFlexBox>
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