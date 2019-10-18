import Link from 'next/link';

import Layout from '../components/MyLayout';

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
    ];
}

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>
            {`
                a { color: blue; font-family: 'Arial'; text-decoration: none; }
                a:hover { opacity: 0.6; }
                li { list-style: none; margin: 5px 0; }
            `}
        </style>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>
                {`
                    h1 { font-family: 'Arial'; }
                    ul { padding: 0; }
                `}
            </style>
        </Layout>
    );
}
