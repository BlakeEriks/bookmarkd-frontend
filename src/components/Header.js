import useUserActions from '../services/userActions'
import { useAuthState } from '../state/Auth'
import { Button } from '../styles/Button'
import { HeaderContainer, HeaderContent, HeaderTitle } from  '../styles/Header'

const Header = () => {

    const userActions = useUserActions()
    const [auth, setAuth] = useAuthState()

    return (
        <HeaderContainer>
            <HeaderTitle className="niceText">
                bookmarkd
            </HeaderTitle>
            <HeaderContent className="niceText">
                Hi {auth.username}!
                <Button className="niceText" width='110px' onClick={userActions.logout}>
                    Sign Out
                </Button>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header