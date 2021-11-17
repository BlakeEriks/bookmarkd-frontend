import { VerticalFlexBox } from "../styles/Boxes"
import React, {useEffect, useState} from "react";
import useBookmarks from "../services/bookmarks";
import BookmarkExplore from "./BookmarkExplore";
import { SubTitle } from "../styles/Text";


const PublicBookmarks = () => {

    const [bookmarks, setBookmarks] = useState([]);

    const bookmarkService = useBookmarks()

    const getBookmarks = async () => {
        const response = await bookmarkService.explore()
        setBookmarks(response)
    }

    useEffect(() => getBookmarks(), [])

    const createBookmark = async bookmark => {
        await bookmarkService.create(bookmark)
        getBookmarks()
    }

    return (
        <main>
            <VerticalFlexBox width='40%' alignItems='center'>
                <SubTitle className="niceText">
                    Explore
                </SubTitle>
                {bookmarks.map( bookmark =>
                    <BookmarkExplore key={bookmark._id} {...bookmark} createBookmark={createBookmark} />
                )}
                </div>
            </VerticalFlexBox>
        </main>
    )

};

export default PublicBookmarks;
