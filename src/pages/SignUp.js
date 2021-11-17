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
import { Link } from "react-router-dom";

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
        <form action="/signup" method="post" onSubmit={handleSubmit}>
            <fieldset>
            <VerticalFlexBox alignItems='center'>
                <div>
                    <SubTitle font-weight="bold">Sign Up</SubTitle>
                </div>
                <HorizontalDivider />
                <div>
                <LoginInput type="text" name="username" value={form.username} placeholder="username" onChange={onChange} required />
                </div>
                <div>
                <LoginInput type="password" name="password" value={form.password} placeholder= "password" onChange={onChange} required />
                </div>
                <HorizontalDivider />
                <div>
                    <WhiteButton type="submit">Create Account</WhiteButton>
                </div>
                <Link to="/login" style={{marginTop: '4px'}}>
                    <WhiteButton>
                        Go Back
                    </WhiteButton>
                </Link>
            </VerticalFlexBox>
            </fieldset>
            {err &&
            <div>
                Username taken. Please pick another.
            </div>}
        </form>
    )
}

export default SignUp