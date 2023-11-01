'use client';

import Typography from '@/components/Typography';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();
    const handleGoHome = () => {
        router.push('/');
    };
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Typography variant='h1' color='white' onClick={handleGoHome}>
                    Brandshop
                </Typography>
            </div>
        </header>
    );
}

export default Header;
