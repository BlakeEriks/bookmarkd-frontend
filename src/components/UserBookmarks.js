import { VerticalFlexBox } from "../styles/Boxes"
import Bookmark from "./Bookmark"
import EditBookmark from "./EditBookmark"
import SearchBar from "./SearchBar"

const UserBookmarks = () => {
    return (
        <VerticalFlexBox width='60%'>
            <SearchBar />
            <ul>
                <Bookmark website={'CodeWars'} />
                <Bookmark website={'React Docs'} />
                <Bookmark website={'LinkedIn'} />
                <Bookmark website={'Twitter'} />
            </ul>
            <EditBookmark />
        </VerticalFlexBox>
    )
}

export default UserBookmarks