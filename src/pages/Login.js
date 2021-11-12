const Login = () => {
    return (
        <div>
            <form action="/login" method="post">
                <fieldset>
                    <legend>Login</legend>

                    <label>
                        Username: <input type="text" name="username" required></input>
                    </label>

                    <label>
                        Password: <input type="password" name="password" required></input>
                    </label>

                    <input type="submit" value="login"></input>
                </fieldset>

            </form>
        </div>

        )
}

export default Login