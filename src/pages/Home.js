import { useEffect } from "react"
import { Navigate } from "react-router"
import Header from "../components/Header"
import PublicBookmarks from "../components/PublicBookmarks"
import UserBookmarks from "../components/UserBookmarks"
import useBookmarks from "../services/bookmarks"
import { useAuthState } from "../state/Auth"
import { HorizontalFlexBox } from "../styles/Boxes"
import { VerticalDivider } from "../styles/Divider"

const Home = () => {

    const [auth] = useAuthState()
    const bookmarkService = useBookmarks()

    useEffect( () => {
        bookmarkService.explore().then(res => {
            console.log(res)
            console.log(auth)
        })
    }, ([]))

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