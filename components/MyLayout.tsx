import { NextPage } from 'next';

import Header from './Header';

interface ILayoutProps {
    children: React.ReactNode;
}

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD',
};

const Layout: NextPage<ILayoutProps> = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;
