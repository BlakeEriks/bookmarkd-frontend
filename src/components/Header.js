import useUserActions from '../services/userActions'
import { useAuthState } from '../state/Auth'
import { SignOutButton } from '../styles/Button'
import { HeaderContainer, HeaderContent, HeaderTitle } from  '../styles/Header'

const Header = () => {

    const userActions = useUserActions()
    const [auth] = useAuthState()

    return (
        <HeaderContainer>
            <HeaderTitle className="niceText">
                bookmarkd
            </HeaderTitle>
            <HeaderContent className="niceText">
                Hi {auth.username}!
                <SignOutButton className="niceText" width='110px' onClick={userActions.logout}>
                    Sign Out
                </SignOutButton>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header