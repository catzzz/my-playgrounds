import {
    FooterStyles,
    Container,
    Logo,
    Copyright
} from './footer.module'

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
