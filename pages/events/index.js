import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";

export default function EventsPage({ events }) {
  return (
    <Layout title="Events">
      <h1>Events</h1>
      {events.map((evt) => (
        <Link href={`/events/${evt.slug}`} key={evt.id}>
          <a className="btn">{evt.name} Details</a>
        </Link>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events },
  };
}
