import React, { useEffect } from 'react';
import { IProduct } from '../../ts/interfaces';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { useAppDispatch, useAppSelector } from '@/store/useRedux';
import { fetchProducts } from '@/store/actions';

const ProductList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <main className={styles.section}>
            {products &&
                products.map((p: IProduct) => (
                    <ProductCard key={p.id} {...p} />
                ))}
        </main>
    );
};

export default ProductList;
