import styled from 'styled-components'
export const FooterStyles = styled.footer`
    width: 100%;
    height: 7rem;
    background-color: var(--color-grey-dark-2);
    color:var(--color-grey-light-1);
    display: flex;
  
    
`;

export const Container = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;

`;
export const Logo = styled.pre`
   display: inline-block;
   padding-right:2rem;
   border-right:1px solid var(--color-grey-light-1);
   text-transform: uppercase;
`;

export const Copyright = styled.span`
display: inline-block;
   padding-left:2rem;
`;
