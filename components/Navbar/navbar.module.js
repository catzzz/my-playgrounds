import styled from 'styled-components'
export const NavigationStyles = styled.nav`
    width: 100%;
    height: 7rem;
    background-color: var(--color-grey-light-1);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow:.2rem .2rem 1rem rgba(0,0,0,.15);
    
`;

export const Container = styled.div`
    max-width: 120rem;
    width: 100%;
    display: flex;
    margin: 0 auto;

    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    /* border: 1px solid red; */

`;

export const Left = styled.div`
    display:  flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* border: 1px solid green; */
`;

export const Logo = styled.h1`
    font-size: 2rem;
    font-weight: bold;
   
    text-transform: uppercase;
    

    a{
        &:link,
        &:visited{
            text-decoration: none;
            color:var(--color-grey-dark-1);
            flex: 0;
        }
    }

`;

export const Burger = styled.div`

    display: none;
    @media only screen and (max-width: 768px) {
        font-size: 3.5rem;
        border: 1px solid purple;
        cursor: pointer;
        display: flex;
        /* display: ${props => props.isMenuOpen ? "none": "block"}; */
        &:hover{
            transform: scale(1.1);
        }
    }


`;

export const Right = styled.ul`
    display:  flex;

    justify-content: space-between;
    list-style: none;
    align-items: center;
   
    @media only screen and (max-width: 768px) {
        display: none;
    }
    
    

    
`;



export const NavLink = styled.li`
    margin: 0 .5rem;



    cursor: pointer;
   
    a{
        &:link,
        &:visited{
            font-size: 1.6rem;
            font-weight: 600;
            padding: .8rem 1.2rem;
            text-decoration: none;
            display: inline-block;
            color:var(--color-grey-dark-1);
            
        }
        &:hover{
            border-bottom: 2px solid var(--color-primary);
        }

    }
`;

export const LinkBtn = styled.div`


  
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
