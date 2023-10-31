import Link from 'next/link';
import { IProduct } from '../../ts/interfaces';
import styles from './GoodCard.module.scss';

const ProductCard = (product: IProduct) => {
    const { colors, name, id } = product;

    return (
        <Link href={`/good?id=${id}`} className={styles.card}>
            <span className={styles.card_title}>{name}</span>
            <img
                className={styles.card_img}
                alt='фото товара'
                src={colors[0].images[0]}
            />
        </Link>
    );
};

export default ProductCard;
