import styled from 'styled-components'

export const CardStyles = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: .8rem;
    background-color: white;
    box-shadow: .2rem .2rem .8rem rgba(0,0,0,.15);
    cursor: pointer;
    img{
        width: 100%;
        object-fit: cover;
        min-height: 8rem;
        &:hover{
            transform: scale(1.05);
        }
        

    }
    &:hover{
        box-shadow: .5rem .5rem 1rem rgba(0,0,0,.15);
    }


`;
export const CardDetail = styled.div`
    margin:1rem 1rem;
    font-size: 1.6rem;
    
    
    
`;
export const CardTitle = styled.span`
    font-weight: bold;
    color:var(--color-grey-dark-1);
    
`;
export const CardSubTitle = styled.span`
        display: block;
        color:var(--color-grey-dark-2);
    
`;
export const CardBadge = styled.div`
    position: absolute;
    top: .5rem;
    left: .5rem;
    font-size:1.6rem;
    color: var(--color-primary);
   

`;