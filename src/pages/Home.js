import { Navigate } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PublicBookmarks from "../components/PublicBookmarks"
import UserBookmarks from "../components/UserBookmarks"
import { useAuthState } from "../state/Auth"
import { HorizontalFlexBox } from "../styles/Boxes"

const Home = () => {

    const [auth] = useAuthState()

    return (
        !auth ? <Navigate to='/login' /> :
        <>
            <Header />
            <HorizontalFlexBox alignItems='flex-start' width='90%' justifyContent='space-between'>
                <UserBookmarks />
                {/* <VerticalDivider height='200px'/> */}
                <PublicBookmarks />
            </HorizontalFlexBox>
            <Footer />
        </>
    )
}

export default Home