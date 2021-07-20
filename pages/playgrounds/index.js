import CardList from '@/components/CardList'
import {API_URL} from '@/config/index'

import Layout from "@/components/Layout"
import styled from 'styled-components'

const Container = styled.section`
    width: 100%;
    max-width: 120rem;
    padding: 0 2rem;

`;

const PlaygroundsPage = ({playgrounds}) => {
    return (
        <Layout title="Playgrounds List">
            <Container>
                <CardList title={"Latest Update"} playgrounds={playgrounds} />
            </Container>
        </Layout>
    )
}

export default PlaygroundsPage;


export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/playgrounds`);
    const playgrounds = await res.json();
    return {
      props: { playgrounds },
    };
  }