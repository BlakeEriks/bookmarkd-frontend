import { useState } from "react"
import { Navigate } from "react-router"
import useUserActions from "../services/userActions"
import { useAuthState } from "../state/Auth"
import '../App.css';


import { SubTitle } from "../styles/Text"
import { LoginInput } from "../styles/Input"
import { HorizontalDivider} from "../styles/Divider"
import { WhiteButton } from "../styles/Button"
import { VerticalFlexBox } from "../styles/Boxes"


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
        <div className="container">
            <form onSubmit={handleSubmit} action="/login" method="post">
                <fieldset>
                <VerticalFlexBox>

                   <SubTitle>bookmarkd</SubTitle>

                    <HorizontalDivider />

                    <div className="container">
                        <LoginInput  type="text" name="username" value={form.username} onChange={onChange} placeholder="username" required></LoginInput>
                    </div>

                    <div className="container">
                        <LoginInput type="password" name="password" value={form.password} onChange={onChange} placeholder="password" required></LoginInput>
                    </div>

                    <HorizontalDivider />

                    <div className="container">
                        <WhiteButton type="submit" value="Login">Login</WhiteButton>
                    </div>

                    <HorizontalDivider />

                    <div className="container">
                        <form action ="/signup">
                            <WhiteButton>Sign Up</WhiteButton>
                        </form>
                    </div>


                </VerticalFlexBox>
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