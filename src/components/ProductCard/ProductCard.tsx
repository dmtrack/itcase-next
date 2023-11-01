import Link from 'next/link';
import { IProduct } from '../../ts/interfaces';
import styles from './ProductCard.module.scss';
import Image from 'next/image';

import Typography from '../Typography';

const ProductCard = (product: IProduct) => {
    const { colors, name, id } = product;
    return (
        <Link href={`/product/${id}`} className={styles.card}>
            <Typography className={styles.card_title}>{name}</Typography>
            {colors && (
                <Image
                    className={styles.card_img}
                    alt='фото товара'
                    src={colors[0].images[0]}
                    height={350}
                    width={200}
                />
            )}
        </Link>
    );
};

export default ProductCard;
