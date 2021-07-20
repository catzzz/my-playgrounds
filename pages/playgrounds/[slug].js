import Layout from '@/components/Layout'
import  { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    max-width: 120rem;
    display: flex;
    color:var(--color-grey-dark-1);

`

export const Title = styled.h1`
    font-weight:bold;
    font-size: 2.4rem;
    margin-top: 3rem;
`

export const Location = styled.p`
    font-size: 1.6rem;


`;

const PlaygroundPage = ({playground}) => {
    console.log(playground)
    return (
        <Layout>
            <Container>
                <Title>{playground.title}</Title>
                <Location>{playground.location}</Location>
            </Container>
        </Layout>
    )
}

export default PlaygroundPage



export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/playgrounds`);
    const playgrounds = await res.json();
    console.log(res)
    const paths = playgrounds.map((evt) => ({
      params: { slug: evt.slug },
    }));
    return {
      paths,
      fallback: true,
    };
  }
  export async function getStaticProps({ params: { slug } }) {
    const res = await fetch(`${API_URL}/playgrounds?slug=${slug}`);
    
    const playgrounds = await res.json();
    return {
      props: {
        evt: playgrounds[0],
      },
      revalidate: 1,
    };
  }
  