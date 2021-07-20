import styled from 'styled-components'

export const Title = styled.h4`
    margin-top: 2rem; 
    padding-bottom:2rem; 
    border-bottom: 1px solid var(--color-grey-dark-3);
    font-size:2.4rem ;
`;


export const CardContainer = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
`;