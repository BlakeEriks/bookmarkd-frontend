import { Button } from '../styles/Button'
import { HeaderContainer, HeaderContent, HeaderTitle } from  '../styles/Header'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                bookmarkd
            </HeaderTitle>
            <HeaderContent>
                Hi User!
                <Button>
                    Sign Out
                </Button>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header