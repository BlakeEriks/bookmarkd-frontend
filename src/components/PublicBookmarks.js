import { VerticalFlexBox } from "../styles/Boxes"
import { SubTitle } from "../styles/Text"
import Bookmark from "./Bookmark"
import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";


function PublicBookmarks(props){
    const [bookmarks, setBookmarks] = useState(null);

    const URL = "https://jab-bookmarkd-backend.herokuapp.com/bookmarks"

    const getBookmarks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBookmarks(data);
    }

    const createBookmarks = async (bookmarks) => {
    // make post request to create bookmarks
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookmarks),
    });
    // update list of bookmarks
    getBookmarks();
  };

    useEffect(() => getBookmarks(), []);

}

return (
    <main>
        <Switch>
            <VerticalFlexBox width='40%' alignItems='center'>
            <h2>Explore</h2>
            <hr />
            <Route exact path="/">
                <Index bookmarks={bookmarks} createBookmarks={createBookmarks} />
            </Route>
            <ul>
                <Bookmark website={'Google'} />
                <Bookmark website={'Facebook'} />
                <Bookmark website={'Amazon'} />
                <Bookmark website={'MDN'} />
            </ul>
            
            <hr />
            <button onClick={createBookmarks} id="add">
                ADD
            </button>    
            </VerticalFlexBox>
        </Switch>
    </main>
    )

export default PublicBookmarks;
