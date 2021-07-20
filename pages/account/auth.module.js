import styled from 'styled-components'

export const AuthStyles = styled.div`
    width: 100%;
    max-width: 50rem;
    margin:5rem auto ;
    padding: 3rem;
    box-shadow:  0 .5rem 1rem 0 rgba(50,50,50,.15);
    background-color: white;
    border-radius: 1rem;

    font-size: 1.8rem;
    
    label{
        display: block;
        margin-bottom: 1rem;
    }

    input[type="text"],
    input[type='email'],
    input[type='password']
    {
        
        display: block;
        width: 100%;
        height: 3rem;
        padding: .5rem;
        font-size: 1.8rem;
    }
    input[type='submit']{
        margin-top: 2rem;
        width: 100%;
        font-size:1.7rem;
    }
    div{
        margin-bottom: 1rem ;
    }

    p{
        margin-top: 2rem;
        font-size: 1.6rem;
        
        a{
            &:visited,
            &:link{
                text-decoration: none;
                color:var(--color-primary)
            }
        }
    }

`;



export const AuthTitle = styled.div`
    font-size: 2.7rem;

    font-weight: bold;

    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
    span{
        display: inline-block;
        padding-left:1rem;
    }
`;