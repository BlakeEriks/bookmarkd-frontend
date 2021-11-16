import { HorizontalFlexBox } from "../styles/Boxes"
import { Button } from "../styles/Button"
import { EditIcon, TimesIcon } from "../styles/Icons"
import { Text } from "../styles/Text"

const Bookmark = ({_id, name, url, removeBookmark, setForm}) => {
    return (
        <HorizontalFlexBox style={{marginBottom: '3px'}}>
            <a href={'https://' + url} target='_blank'>
                <Text>{name}</Text>
            </a>
            <HorizontalFlexBox>
                <Button width='30px' padding='none' onClick={() => removeBookmark(_id)}>
                    <TimesIcon />
                </Button>
                <Button width='30px' padding='none' onClick={() => setForm({name, url})}>
                    <EditIcon />
                </Button>
            </HorizontalFlexBox>
        </HorizontalFlexBox>
        
    )
}

export default Bookmark