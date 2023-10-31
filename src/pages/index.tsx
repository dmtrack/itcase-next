import ProductList from '@/components/ProductList/ProductList';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>itcases</title>
            </Head>
            <main>
                <ProductList />
            </main>
        </>
    );
}
