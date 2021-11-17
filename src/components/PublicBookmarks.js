import { VerticalFlexBox } from "../styles/Boxes"
import React from "react";
import useBookmarks from "../services/bookmarks";
import BookmarkExplore from "./BookmarkExplore";
import { SubTitle } from "../styles/Text";
import { useQuery, useQueryClient } from "react-query";


const PublicBookmarks = () => {

    const queryClient = useQueryClient()
    const bookmarkService = useBookmarks()
    
    const exploreQuery = useQuery('bookmarks/explore' ,bookmarkService.explore)
    
    const createBookmark = async bookmark => {
        bookmarkService.create(bookmark)
            .then( () => {
                queryClient.invalidateQueries()
            })
    }

    return (
        <VerticalFlexBox width='40%' alignItems='center'>
            <SubTitle>
                Explore
            </SubTitle>
            {exploreQuery.data?.map( bookmark => 
                <BookmarkExplore key={bookmark._id} {...bookmark} createBookmark={createBookmark} />
            )}
        </VerticalFlexBox>
    )

};

export default PublicBookmarks;
