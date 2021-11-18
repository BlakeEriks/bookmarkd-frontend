import { HorizontalFlexBox } from "../styles/Boxes"
import { Button } from "../styles/Button"
import { EditIcon, TimesIcon } from "../styles/Icons"
import { LinkText } from "../styles/Text"

const Bookmark = ({_id, name, url, removeBookmark, setForm}) => {
    return (
        <HorizontalFlexBox style={{marginBottom: '3px'}} justifyContent='space-between'>
            <LinkText>
                <a href={'https://' + url} target='_blank'>
                    {name}    
                </a>
            </LinkText>
            <HorizontalFlexBox>
                <Button width='30px' onClick={() => setForm({name, url})}>
                    <EditIcon />
                </Button>
                <Button width='30px' onClick={() => removeBookmark(_id)}>
                    <TimesIcon />
                </Button>
            </HorizontalFlexBox>
        </HorizontalFlexBox>
        
    )
}

export default Bookmark