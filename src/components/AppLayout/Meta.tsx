import Head from 'next/head';

interface MetaProps {
    title: string;
}

function Meta({ title }: MetaProps) {
    return (
        <Head>
            <meta
                content='width=device-width, initial-scale=1'
                name='viewport'
            />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    );
}

export default Meta;
