import CardList from '@/components/CardList'
import {API_URL} from '@/config/index'

import Layout from "@/components/Layout"


const PlaygroundsPage = ({playgrounds}) => {
    return (
        <Layout>
            <CardList title={"Latest Update"} playgrounds={playgrounds} />
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