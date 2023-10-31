import Header from './Header/Header';
import Meta from './Meta';

interface AppLayoutProps {
    title: string;
    children: React.ReactNode;
}

function AppLayout({ title, children }: AppLayoutProps) {
    return (
        <>
            <Meta title={title} />
            <Header />
            {children}
        </>
    );
}

export default AppLayout;
