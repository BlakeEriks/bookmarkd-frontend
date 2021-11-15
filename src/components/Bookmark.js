import { Text } from "../styles/Text"

const Bookmark = ({name, url}) => {
    return (
        <Text>
            <a href={'https://' + url} target='_blank'>
                {name}
            </a>    
        </Text>
    )
}

export default Bookmark