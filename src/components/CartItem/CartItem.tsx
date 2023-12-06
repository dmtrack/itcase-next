import styles from './CartItem.module.scss';
import React from 'react';
import { IOrder } from '../../ts/interfaces';
import Typography from '../Typography';
import { useAppDispatch } from '@/store/useRedux';
import { removeItem } from '@/store/slices/cartSlice';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

const CartItem = (product: IOrder) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { id, name, price, size, images, productId } = product;

    const handleCartDelete = () => {
        dispatch(removeItem({ id }));
    };

    const handleGoProduct = () => {
        router.replace(`product/${productId}`);
    };

    return (
        <div className={styles.card}>
            <Image
                className={styles.card_img}
                alt='фото товара'
                src={images[0]}
                height={350}
                width={200}
                onClick={handleGoProduct}
            />

            <div className={styles.card_panel}>
                <div className={styles.card_info}>
                    {' '}
                    <Typography variant='h5' className={styles.card_title}>
                        {name}
                    </Typography>{' '}
                    <Typography className={styles.card_title}>
                        Цена: {price}
                    </Typography>{' '}
                    <Typography className={styles.card_title}>
                        {size}
                    </Typography>
                </div>
                <div className={styles.product_info_btn_group}>
                    <button
                        type='button'
                        onClick={handleCartDelete}
                        className={styles.btn_group_btn}>
                        Убрать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
