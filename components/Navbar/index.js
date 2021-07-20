import Link from 'next/link'

import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import Search from '../Search';
import {
    NavigationStyles,
    Container,
    Left,
    Logo,
    Burger,
    Right,
    NavLink,
    LinkBtn,

} from './navbar.module'

const Navbar = ({isMenuOpen, toggleMenu}) => {
    return (
        <NavigationStyles>
            <Container>
                <Left>
                    <Logo>
                        <Link href="/">
                            <a>Bee&apos;s Playgrounds</a>
                        </Link>
                    </Logo>
                    <Search />
                    <Burger >
                        {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </Burger>
        
                </Left>
                
                <Right>
                    <NavLink>
                        <Link href="/">
                            <a onClick={toggleMenu}>Home</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/playgrounds">
                            <a onClick={toggleMenu}>Playgrounds</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/">
                            <a onClick={toggleMenu}>Contact</a>
                        </Link>
                    </NavLink>
                    <LinkBtn>
                        <Link href="/account/login">
                            <a onClick={toggleMenu}>Login</a>
                        </Link>
                    </LinkBtn>
                </Right>
            </Container>
        </NavigationStyles>
    )
}

export default Navbar
