const SignUp = () => {
    return (
        <div>
            <form action="/signup" method="post">
                <fieldset>
                <legend>Sign Up Here</legend>

                <label>
                    Desired Username: <input type="text" name="username" placeholder="username" required></input>
                </label>

                <label>
                    Password: <input type="password" name="password" placeholder= "password" required></input>
                </label>

                <input type="submit" value="Create Account"></input>
                </fieldset>
            </form>

        </div>
    )
}

export default SignUp