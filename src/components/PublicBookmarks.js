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
                <Bookmark website={'Google'} />
                <Bookmark website={'Facebook'} />
                <Bookmark website={'Amazon'} />
                <Bookmark website={'MDN'} />
            </ul>
        </VerticalFlexBox>
    )
}

export default PublicBookmarks