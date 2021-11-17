import { SearchIcon } from "../styles/Icons"
import { SearchContainer, SearchInput } from "../styles/Search"

const SearchBar = ({filter, setFilter}) => {

    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder='Search' value={filter} onChange={event => setFilter(event.target.value)}/>
        </SearchContainer>
    )
}

export default SearchBar