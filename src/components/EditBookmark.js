import { HorizontalFlexBox, VerticalFlexBox } from "../styles/Boxes"
import Button from "../styles/Button"
import { PlusIcon } from "../styles/Icons"
import { Input } from "../styles/Input"

const EditBookmark = () => {
    return (
        <HorizontalFlexBox>
            <VerticalFlexBox>
                <Input placeholder='Website'/>
                <Input placeholder='Link' />
            </VerticalFlexBox>
            <Button>
                <PlusIcon />
            </Button>
        </HorizontalFlexBox>
    )
}

export default EditBookmark