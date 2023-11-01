import styles from './Product.module.scss';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import Gallery from '@/components/Gallery/Gallery';
import { useRouter } from 'next/router';
import { fetchCurrentProduct, fetchSizes } from '@/store/actions';
import ProductInfo from '@/components/ProductInfo/ProductInfo';

const Product = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const currentProductId = Number(router.query.id);

    const currentProduct = useAppSelector(
        (state) => state.products.currentProduct
    );

    const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
    const currentColor = currentProduct?.colors[selectedColorIndex];

    useEffect(() => {
        dispatch(fetchSizes());
        dispatch(fetchCurrentProduct(currentProductId));
    }, []);

    return (
        <main className={styles.container}>
            <Gallery images={currentColor?.images || []} />
            <ProductInfo
                selectedColorIndex={selectedColorIndex}
                setSelectedColorIndex={setSelectedColorIndex}
            />
        </main>
    );
};

export default Product;
