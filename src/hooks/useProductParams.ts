import { useAppSelector } from '@/store/useRedux';
import { useState } from 'react';

export const useProductParams = (selectedColorIndex: number) => {
    const [currentSize, setCurrentSize] = useState<number | null>(null);

    const { currentProduct } = useAppSelector((state) => state.products);
    const allSizes = useAppSelector((state) => state.products.sizes);

    const currentColor = currentProduct?.colors[selectedColorIndex];
    const availableSizes = currentColor?.sizes;

    return {
        currentProduct,
        allSizes,
        currentColor,
        availableSizes,
        currentSize,
        setCurrentSize,
    };
};
