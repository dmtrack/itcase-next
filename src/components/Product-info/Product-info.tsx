import styles from './Product-info.module.scss';
import React, { SetStateAction, Dispatch, FC, useState } from 'react';
import { useAppSelector } from '@/redux/use-redux';
import Typography from '../Typography';

interface IProps {
    setSelectedColorIndex: Dispatch<SetStateAction<number>>;
    selectedColorIndex: number;
}

const ProductInfo: FC<IProps> = ({
    setSelectedColorIndex,
    selectedColorIndex,
}) => {
    const currentProduct = useAppSelector(
        (state) => state.products.currentProduct
    );
    const allSizes = useAppSelector((state) => state.products.sizes);
    const currentColor = currentProduct?.colors[selectedColorIndex];
    const availableSizes = currentColor?.sizes;

    const [currentSize, setCurrentSize] = useState<number | null>(null);

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
            </div>
        </div>
    );
};

export default ProductInfo;
