  
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import {useState} from 'react'
const LayoutStyles = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--color-grey-light-1);
    position: relative;
`;

const LayoutMain = styled.div`
   
    min-height: calc(100vh - 14rem);
    max-width: 120rem;
    width: 100%;
    margin:7rem auto 0 auto;

`;

export default function Layout({title, keywords, description, children}) {

    const router = useRouter()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () =>{
      
      setIsMenuOpen(!isMenuOpen)
    }
    return (
        <LayoutStyles>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta key='keywords' content={keywords} />
            </Head>
            <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
            {/* router path === '/', then show show case */}
            <LayoutMain>
            {children}
            </LayoutMain>
            <Footer />
        </LayoutStyles>
    )
}

Layout.defaultProps ={
    title:'BEE PLAYGROUNDS | Find the funest playgrounds and parks',
    description: 'Find the funest playgrounds and parks in USA',
    keywords:'playgrounds, kids , parks, travels, famaily'
}