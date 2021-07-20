import styled from 'styled-components'


export const SearchStyles = styled.div`
    padding: 1rem;
    display: flex;
    width: 60%;
    
    background-color: white;
    border-radius: 10rem;

`;

export const Input = styled.input`
    
    width: 100%;
    padding: 0 .8rem;
    border:none;
    background-color: white;
    line-height: 1.25;
    &:focus{
        outline: none;
    }
`;

export const Button = styled.button`
    background-color: var(--color-grey-dark-2);
    border-radius: 50%;
    padding: .8rem;
    color: var(--color-grey-light-1);
    border:none;
    display:  flex;
    align-items: center;
    cursor: pointer;
    &:hover{
        background-color: var(--color-primary);
    }
`;