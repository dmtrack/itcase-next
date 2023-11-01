import styles from './Cart.module.scss';
import React from 'react';
import CardItem from '@/components/CartItem/CartItem';
import { useAppSelector } from '@/store/useRedux';
const { v4: uuidv4 } = require('uuid');

function CartPage() {
    const items = useAppSelector((state) => state.cart.cartItems);

    return (
        <div className={styles.section}>
            {items && items.map((p) => <CardItem key={uuidv4()} {...p} />)}
        </div>
    );
}

export default CartPage;
