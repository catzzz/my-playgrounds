
import Layout from '@/components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import {FaExclamationTriangle} from 'react-icons/fa'
export const Container = styled.div`
    max-width: 120rem;
    width: 100%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    text-align:center;
    margin-top: 20rem;
    a{
        padding: .6rem 1.2rem;
        border:2px solid var(--color-grey-dark-2);
        border-radius: 2rem;
        
        &:link,
        &:visited{
            text-decoration: none;
            font-size: 1.8rem;
            color:var(--color-gray-dark-2);
            
        }
        &:hover{
            background-color: var(--color-grey-dark-2);
            color:var(--color-grey-light-1);
        }
    }   

`;



export const ErrorMessage = styled.div`
    display: flex;
    align-items: center;
    
    h1{
        font-size: 3.6rem;
        font-weight: bold;
        padding-right: 2rem;
        
    }

    p {
        padding-left: 2rem;
        font-size: 1.8rem;
        border-left: 2px solid var(--color-grey-dark-2);
        color:var(--color-gray-dark-2);
    }

   
`;
export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <Container>
    
                <ErrorMessage>
                    <h1>404</h1>
                    <p>Sorry, there is nothing here</p>
                </ErrorMessage>
                <Link href="/"><a>Go Back Home</a></Link>
            </Container>
        </Layout>
    )
}