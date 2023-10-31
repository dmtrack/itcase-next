import ProductList from '@/components/Product-list/Product-list';
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
