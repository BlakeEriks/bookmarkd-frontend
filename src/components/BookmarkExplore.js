import { HorizontalFlexBox } from "../styles/Boxes"
import { Button } from "../styles/Button"
import { PlusIcon } from "../styles/Icons"
import { Text } from "../styles/Text"

const BookmarkExplore = ({name, url, createBookmark}) => {
    return (
        <HorizontalFlexBox width='80%'>
            <Text>{name}</Text>
            <Button onClick={() => createBookmark({name})}>
                <PlusIcon fontSize='20px'/>
            </Button>
        </HorizontalFlexBox>
    )
}

export default BookmarkExplore