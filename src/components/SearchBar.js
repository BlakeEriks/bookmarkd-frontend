import { useState } from "react"
import { SearchIcon } from "../styles/Icons"
import { SearchContainer, SearchInput } from "../styles/Search"

const SearchBar = ({filter, setFilter}) => {

    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder='Search'  />
        </SearchContainer>
    )
}

export default SearchBar