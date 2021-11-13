import { HorizontalFlexBox, VerticalFlexBox } from "../styles/Boxes"
import { Button, EditAddButton } from "../styles/Button"
import { PlusIcon } from "../styles/Icons"
import { Input } from "../styles/Input"

const EditBookmark = () => {
    return (
        <HorizontalFlexBox>
            <VerticalFlexBox>
                <Input placeholder='Website'/>
                <Input placeholder='Link' />
            </VerticalFlexBox>
            <EditAddButton>
                <PlusIcon />
            </EditAddButton>
        </HorizontalFlexBox>
    )
}

export default EditBookmark