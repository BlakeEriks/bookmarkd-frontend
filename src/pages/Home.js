import { Navigate } from "react-router"
import Header from "../components/Header"
import PublicBookmarks from "../components/PublicBookmarks"
import UserBookmarks from "../components/UserBookmarks"
import { useAuthState } from "../state/Auth"
import { HorizontalFlexBox } from "../styles/Boxes"
import { VerticalDivider } from "../styles/Divider"

const Home = () => {

    const [auth] = useAuthState()

    return (
        !auth ? <Navigate to='/login' /> :
        <>
            <Header />
            <HorizontalFlexBox>
                <UserBookmarks />
                <VerticalDivider height='200px'/>
                <PublicBookmarks />
            </HorizontalFlexBox>
        </>
    )
}

export default Home