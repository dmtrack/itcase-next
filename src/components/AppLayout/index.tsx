import { useAppSelector } from '@/store/useRedux';
import { Cart } from '../Cart/Cart';
import Header from './Header/Header';
import Meta from './Meta';

interface AppLayoutProps {
    title: string;
    children: React.ReactNode;
}

function AppLayout({ title, children }: AppLayoutProps) {
    const items = useAppSelector((state) => state.cart.cartItems);
    return (
        <>
            <Meta title={title} />
            <Header />
            {items.length ? <Cart /> : null}
            {children}
        </>
    );
}

export default AppLayout;
