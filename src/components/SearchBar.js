import { SearchIcon } from "../styles/Icons"
import { SearchContainer, SearchInput } from "../styles/Search"

const SearchBar = () => {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder='Search' />
        </SearchContainer>
    )
}

export default SearchBar