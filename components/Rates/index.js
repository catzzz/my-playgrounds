import styled from 'styled-components'
import {AiTwotoneHeart} from 'react-icons/ai'

export const Badge = styled.div`
    color: var(--color-primary);
    background-color: var(--color-yellow-light);
    display: flex;
    align-items: center;
    padding: .2rem .2rem;
    justify-content: center;
    border-radius: 1rem;
    font-size: 1rem;
`;

const generateHearts = (rates) => {
    let hearts = []
    for(let i = 0; i< rates; i++){
        hearts.push(<AiTwotoneHeart key={i} />)
    }
    return hearts
}


const index = ({rates}) => {
    return (
        <Badge>
            {generateHearts(rates)}
        </Badge>
    )
}

export default index
