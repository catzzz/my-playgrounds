import styled from 'styled-components'
const FooterStyles = styled.footer`
    width: 100%;
    height: 7rem;
    background-color: var(--color-grey-dark-1);
    color:var(--color-grey-light-1);
    display: flex;
  
    
`;

const Container = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: center;

`;
const Logo = styled.pre`
   display: inline-block;
   padding-right:2rem;
   border-right:1px solid var(--color-grey-light-1);
`;

const Copyright = styled.span`
display: inline-block;
   padding-left:2rem;
`;


const Footer = () => {
    return (
        <FooterStyles>
            <Container>
                <Logo>Bee&apos;s Playgrounds</Logo>
                <Copyright>© 2020 BEE CHU</Copyright>
            </Container>

        </FooterStyles>
    )
}

export default Footer
