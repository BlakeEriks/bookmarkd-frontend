import { useEffect, useState } from "react"
import useBookmarks from "../services/bookmarks"
import { useAuthState } from "../state/Auth"
import { VerticalFlexBox } from "../styles/Boxes"
import Bookmark from "./Bookmark"
import EditBookmark from "./EditBookmark"
import SearchBar from "./SearchBar"

const UserBookmarks = () => {

    const bookmarkService = useBookmarks()
    const [bookmarks, setBookmarks] = useState([])
    const [formData, setFormData] = useState({name: '', url: ''})

    const getBookmarks = () => {
        bookmarkService.get().then(res => {
            setBookmarks(res)
        })
    }

    useEffect( () => {
        getBookmarks()
    }, [])

    const createBookmark = bookmark => {
        bookmarkService.create(bookmark)
            .then( () => {
                getBookmarks()
            })
    }

    const removeBookmark = id => {
        bookmarkService.remove(id)
            .then( res => {
                console.log(res)
                setBookmarks([...bookmarks.filter(bookmark => bookmark._id !== id)])
            })
    }

    const nameExists = name => bookmarks.some(bookmark => bookmark.name === name)

    return (
        <VerticalFlexBox width='60%'>
            <SearchBar />
            <ul style={{width: '50%'}}>
                {bookmarks.map( bookmark => <Bookmark key={bookmark._id} {...bookmark} removeBookmark={removeBookmark} setForm={setFormData} />)}
            </ul>
            <EditBookmark formData={formData} createBookmark={createBookmark} nameExists={nameExists}/>
        </VerticalFlexBox>
    )
}

export default UserBookmarks