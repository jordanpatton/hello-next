import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/MyLayout';

interface IPost {
    id: string;
    title: string;
}

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' },
    ];
}

const PostLink = ({ post }: { post: IPost; }) => (
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

const Blog: NextPage = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            {getPosts().map((post: IPost) => (
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

export default Blog;
