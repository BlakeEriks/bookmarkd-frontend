import Header from "../components/Header"
import PublicBookmarks from "../components/PublicBookmarks"
import UserBookmarks from "../components/UserBookmarks"
import { HorizontalFlexBox } from "../styles/Boxes"
import { VerticalDivider } from "../styles/Divider"

const Home = () => {
    return (
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