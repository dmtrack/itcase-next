import React, { FC, useState } from 'react';

import styles from './Goodlist.module.scss';
import Image from 'next/image';

interface IProps {
    images: string[];
}

const Goodlist: FC<IProps> = ({ images }) => {
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

export default Goodlist;
