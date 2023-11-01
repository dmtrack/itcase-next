import styles from './Cart.module.scss';
import React from 'react';
import CardItem from '@/components/CartItem/CartItem';
import { useAppSelector } from '@/store/useRedux';

function CartPage() {
    const items = useAppSelector((state) => state.cart.cartItems);

    return (
        <div className={styles.section}>
            {items && items.map((p) => <CardItem key={p.id} {...p} />)}
        </div>
    );
}

export default CartPage;
