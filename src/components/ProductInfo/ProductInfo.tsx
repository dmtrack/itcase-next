import styles from './ProductInfo.module.scss';
import React, { SetStateAction, Dispatch, FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import Typography from '../Typography';
import { IOrder } from '@/ts/interfaces';
import { addItem } from '@/store/slices/cartSlice';

interface IProps {
    setSelectedColorIndex: Dispatch<SetStateAction<number>>;
    selectedColorIndex: number;
}

const ProductInfo: FC<IProps> = ({
    setSelectedColorIndex,
    selectedColorIndex,
}) => {
    const dispatch = useAppDispatch();
    const currentProduct = useAppSelector(
        (state) => state.products.currentProduct
    );
    const allSizes = useAppSelector((state) => state.products.sizes);
    const currentColor = currentProduct?.colors[selectedColorIndex];
    const availableSizes = currentColor?.sizes;
    let order: IOrder;
    const [currentSize, setCurrentSize] = useState<number | null>(null);

    if (currentColor && currentSize) {
        order = {
            id:
                currentProduct.id +
                currentSize +
                currentColor.id +
                currentColor.name +
                currentProduct.name,
            name: currentProduct?.name,
            images: currentColor?.images,
            description: currentColor?.description,
            price: currentColor.price,
            size: currentSize,
            color: currentColor.name,
        };
    }
    const handleAddBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(addItem(order));
        setCurrentSize(null);
    };
    return (
        <div className={styles.product_info}>
            <div className={styles.product_info_wrapper}>
                <Typography variant='h2'>{currentProduct?.name}</Typography>
                <Typography variant='h4'>
                    {currentColor?.description}
                </Typography>
                <Typography variant='h4'>
                    Цена: {currentColor?.price}
                </Typography>
                <div className={styles.product_info_btn_group}>
                    {currentProduct?.colors.map((color, i) => (
                        <button
                            key={color.id}
                            type='button'
                            onClick={() => setSelectedColorIndex(i)}
                            className={`${styles.btn_group_btn} ${
                                selectedColorIndex === i &&
                                `${styles.btn_group_btn_active}`
                            }`}>
                            {color.name}
                        </button>
                    ))}
                </div>
                <div className={styles.product_info_btn_group}>
                    {availableSizes?.length ? (
                        availableSizes.map((size) => (
                            <button
                                key={size}
                                type='button'
                                onClick={() => setCurrentSize(size)}
                                className={`${styles.btn_group_btn} ${
                                    currentSize === size &&
                                    `${styles.btn_group_btn_active}`
                                }`}>
                                {allSizes?.find((s) => s.id === size)?.label}
                            </button>
                        ))
                    ) : (
                        <Typography variant='h4' color='black'>
                            Все размеры распроданы
                        </Typography>
                    )}
                </div>
                <div className={styles.product_info_btn_group}>
                    <button
                        disabled={currentSize ? false : true}
                        type='button'
                        onClick={handleAddBasket}
                        className={styles.btn_group_btn}>
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
