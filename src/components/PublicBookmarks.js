import { VerticalFlexBox } from "../styles/Boxes"
import { SubTitle } from "../styles/Text"
import Bookmark from "./Bookmark"
import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";


function PublicBookmarks(props){
    const [bookmarks, setBookmarks] = useState([]);

    const bookmarkService = useBookmarks()

    const getBookmarks = async () => {
        const response = await bookmarkService.explore()
        setBookmarks(response);
    }
    
    const res = await bookmarkService.create(bookmark)
        getBookmarks();

    useEffect(() => getBookmarks(), []);
};

return (
    <main>
        <VerticalFlexBox width='40%' alignItems='center'>
            <h2>Explore</h2>
            <hr />
            {bookmarks.map( bookmark => <Bookmark key={bookmark._id} {...bookmark} />)}
            <div>createBookmark={createBookmark}</div>
            <hr />
            <button onClick={createBookmark} id="add">
                ADD
            </button>    
        </VerticalFlexBox>
    </main>
)

export default PublicBookmarks;
