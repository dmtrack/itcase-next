'use client';

import Typography from '@/components/Typography';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Typography variant='h1' color='white'>
                    Brandshop
                </Typography>
            </div>
        </header>
    );
}

export default Header;
