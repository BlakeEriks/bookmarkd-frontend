import { SearchIcon } from "../styles/Icons"
import { SearchContainer, SearchInput } from "../styles/Search"

const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput  className="niceText" placeholder='Search'  />
        </SearchContainer>
    )
}

export default SearchBar