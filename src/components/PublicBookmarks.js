import { VerticalFlexBox } from "../styles/Boxes"
import { SubTitle } from "../styles/Text"
import Bookmark from "./Bookmark"

const PublicBookmarks = () => {
    return (
        <VerticalFlexBox width='40%' alignItems='center'>
            <SubTitle>
                Explore
            </SubTitle>
            <ul>
                <Bookmark name={'Google'} />
                <Bookmark name={'Facebook'} />
                <Bookmark name={'Amazon'} />
                <Bookmark name={'MDN'} />
            </ul>
        </VerticalFlexBox>
    )
}

export default PublicBookmarks