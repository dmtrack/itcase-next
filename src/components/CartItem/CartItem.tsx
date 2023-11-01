import styles from './CartItem.module.scss';
import React from 'react';
import { IOrder } from '../../ts/interfaces';
import Typography from '../Typography';
import { useAppDispatch } from '@/store/useRedux';
import { removeItem } from '@/store/slices/cartSlice';

const CartItem = (product: IOrder) => {
    const { id, name, price, size, images } = product;
    const dispatch = useAppDispatch();
    const handleCartDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLElement;
        const buttonId = target.id;
        dispatch(removeItem(buttonId));
    };

    return (
        <div className={styles.card}>
            <img
                className={styles.card_img}
                alt='фото товара'
                src={images[0]}
            />

            <div className={styles.card_panel}>
                <div className={styles.card_info}>
                    {' '}
                    <Typography variant='h5' className={styles.card_title}>
                        Наименование: {name}
                    </Typography>{' '}
                    <Typography className={styles.card_title}>
                        Цена: {price}
                    </Typography>{' '}
                    <Typography className={styles.card_title}>
                        Размер: {size}
                    </Typography>
                </div>
                <div className={styles.product_info_btn_group}>
                    <button
                        id={id.toString()}
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
