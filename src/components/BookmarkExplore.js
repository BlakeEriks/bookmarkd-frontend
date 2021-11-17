import { Button } from "../styles/Button"
import { PublicText } from "../styles/Text"

const BookmarkExplore = ({name, url, createBookmark}) => {
    return (
        <>
            <PublicText>{name}</PublicText>
            <Button onClick={() => createBookmark({name})}>
            ADD</Button>
        </>
    )
}

export default BookmarkExplore