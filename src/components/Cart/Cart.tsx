import styles from './Cart.module.scss';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/store/useRedux';
import { CartIcon } from '../../../public/icons/CartIcon';

function Cart() {
    const router = useRouter();
    const items = useAppSelector((state) => state.cart.cartItems);
    console.log(items, 'items');
    const handleGoCart = () => {
        router.push('/cart');
    };

    return (
        <div className={styles.cart} onClick={handleGoCart}>
            <i className='material-icons '>
                <CartIcon />
            </i>
            {items && items.length ? (
                <span className={styles.cart_quantity}>{items.length}</span>
            ) : null}
        </div>
    );
}
export { Cart };
