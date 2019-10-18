import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '../components/MyLayout';

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/p/[id]" as={`/p/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const r = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const rj = await r.json();
    console.log(`Show data fetched. Count: ${rj.length}`);
    return { shows: rj.map(entry => entry.show) };
};

export default Index;
