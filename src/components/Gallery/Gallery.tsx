import React, { FC, useState } from 'react';

import styles from './Gallery.module.scss';
import Image from 'next/image';

interface IProps {
    images: string[];
}

const Gallery: FC<IProps> = ({ images }) => {
    const [index, setIndex] = useState(0);

    const setNextIndex = (): void => {
        if (images[index + 1]) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
    const setPrevIndex = (): void => {
        if (images[index - 1]) {
            setIndex(index - 1);
        } else {
            setIndex(images.length - 1);
        }
    };

    return (
        <div className={styles.gallery}>
            <Image
                className={styles.gallery_img}
                src={images[index]}
                alt='Фото товара'
                width={300}
                height={400}
            />
            <div className={styles.gallery_controls}>
                <button
                    onClick={setPrevIndex}
                    type='button'
                    className={styles.control_button}>
                    {'<'}
                </button>
                <button
                    onClick={setNextIndex}
                    type='button'
                    className={styles.control_button}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Gallery;
