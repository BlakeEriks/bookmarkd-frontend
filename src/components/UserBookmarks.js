import { useEffect, useState } from "react"
import useBookmarks from "../services/bookmarks"
import { useAuthState } from "../state/Auth"
import { VerticalFlexBox } from "../styles/Boxes"
import Bookmark from "./Bookmark"
import EditBookmark from "./EditBookmark"
import SearchBar from "./SearchBar"

const UserBookmarks = () => {

    const [auth] = useAuthState()
    const bookmarkService = useBookmarks()
    const [bookmarks, setBookmarks] = useState([])

    useEffect( () => {
        bookmarkService.get().then(res => {
            console.log(auth)
            console.log(res)
            setBookmarks(res)
        })
    }, ([]))

    const createBookmark = bookmark => {
        bookmarkService.create(bookmark)
            .then( res => {
                setBookmarks([...bookmarks, res])
            })
    }

    return (
        <VerticalFlexBox width='60%'>
            <SearchBar />
            <ul>
                {bookmarks.map( bookmark => <Bookmark key={bookmark._id} {...bookmark} />)}
            </ul>
            <EditBookmark createBookmark={createBookmark}/>
        </VerticalFlexBox>
    )
}

export default UserBookmarks