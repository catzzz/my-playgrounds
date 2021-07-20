import styled from 'styled-components'
import {AiOutlineSearch } from 'react-icons/ai'
import {
    SearchStyles,
    Input,
    Button,
} from './search.module' 

const Search = () => {
    return (
        <SearchStyles>

            <Input type="text" placeholder="Search" />
            <Button className="" >
                <AiOutlineSearch />
            </Button>

        </SearchStyles>
    )
}

export default Search
