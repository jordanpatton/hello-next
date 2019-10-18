import fetch from 'isomorphic-unfetch';

import Layout from '../../components/MyLayout';

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const r = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await r.json();
    console.log(`Fetched show: ${show.name}`);
    return { show };
};

export default Post;
