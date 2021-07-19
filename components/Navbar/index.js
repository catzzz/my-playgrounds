import Link from 'next/link'
import styled from 'styled-components'
import {AiOutlineMenu} from 'react-icons/ai'
const NavigationStyles = styled.nav`
    width: 100%;
    height: 7rem;
    background-color: var(--color-grey-light-1);
    display: flex;
    align-items: center;
    
`;

const Container = styled.div`
    max-width: 120rem;
    width: 100%;
    display: flex;
    margin: 0 auto;

    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

`;

const Left = styled.div`
    display:  flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Logo = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    
    a{
        &:link,
        &:visited{
            text-decoration: none;
            color:var(--color-grey-dark-1);
        }
    }

`;

const Burger = styled.div`
    font-size: 3.5rem;
    display: flex;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    
`;

const Right = styled.ul`
    display:  flex;

    justify-content: space-between;
    list-style: none;
    align-items: center;
   
    
`;



const NavLink = styled.li`
    margin: 0 1rem;



    cursor: pointer;
   
    a{
        &:link,
        &:visited{
            font-size: 1.6rem;
            font-weight: 600;
            padding: .8rem 1.6rem;
            text-decoration: none;
            display: inline-block;
            color:var(--color-grey-dark-1);
            
        }
        &:hover{
            border-bottom: 2px solid var(--color-primary);
        }

    }
`;

const LinkBtn = styled.div`


  
    a{
        &:link,
        &:visited{
            text-decoration: none;
            color:var(--color-primary);
            padding: .8rem 1.6rem; 
            font-size: 1.6rem;
            font-weight: 600;
            border: 2px solid var(--color-primary);
            border-radius: 5rem;
        }
        &:hover{
            background-color: var(--color-primary);
            color:var(--color-grey-light-1);
        }
    }

`;

const Navbar = () => {
    return (
        <NavigationStyles>
            <Container>
                <Left>
                    <Logo>
                        <Link href="/">
                            <a>Bee&apos;s Playgrounds</a>
                        </Link>
                    </Logo>
                    <Burger>
                        <AiOutlineMenu />
                    </Burger>
                </Left>
                <Right>
                    <NavLink>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/">
                            <a>Playgrounds</a>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link href="/">
                            <a>Contact</a>
                        </Link>
                    </NavLink>
                    <LinkBtn>
                        <Link href="/">
                            <a>LogIn</a>
                        </Link>
                    </LinkBtn>
                </Right>
            </Container>
        </NavigationStyles>
    )
}

export default Navbar
