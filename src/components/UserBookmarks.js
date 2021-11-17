import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import useBookmarks from "../services/bookmarks"
import { BookmarkList, VerticalFlexBox } from "../styles/Boxes"
import Bookmark from "./Bookmark"
import EditBookmark from "./EditBookmark"
import SearchBar from "./SearchBar"

const UserBookmarks = () => {

    const queryClient = useQueryClient()
    const bookmarkService = useBookmarks()
    const [formData, setFormData] = useState({name: '', url: ''})
    const [filter, setFilter] = useState('')

    const bookmarkQuery = useQuery('bookmarks', bookmarkService.get) 

    const createBookmark = bookmark => {
        bookmarkService.create(bookmark)
            .then( () => queryClient.invalidateQueries() )
    }

    const removeBookmark = id => {
        bookmarkService.remove(id)
            .then( () => queryClient.invalidateQueries() )
    }

    const getFilteredBookmarks = () => {
        return bookmarkQuery.data?.filter(bookmark => bookmark.name.toLowerCase().includes(filter.toLowerCase()))
    }

    const nameExists = name => bookmarkQuery.data?.some(bookmark => bookmark.name === name)

    return (
        <VerticalFlexBox width='60%'>
            <SearchBar setFilter={setFilter} filter={filter}/>
                <BookmarkList>
                    {getFilteredBookmarks().map( bookmark => <Bookmark key={bookmark._id} {...bookmark} removeBookmark={removeBookmark} setForm={setFormData} />)}
                </BookmarkList>
            <EditBookmark formData={formData} createBookmark={createBookmark} nameExists={nameExists}/>
        </VerticalFlexBox>
    )
}

export default UserBookmarks