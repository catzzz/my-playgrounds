import { API_URL } from "@/config/index";
import Layout from '@/components/Layout'
const EventPage = () => {
    return (
        <Layout>
            <h1>My events</h1>
        </Layout>
    )
}

export default EventPage


export async function getServerSeideProps({query:{slug}}){
    const res = await fetch(`${API_URL}/api/events/${slug}`)
    const events = await res.json()
    console.log(events)
    return {
        props:{
            evt:events[0]
        }
    }
}