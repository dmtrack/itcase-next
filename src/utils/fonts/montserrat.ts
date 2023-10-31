import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: 'normal',
    preload: true,
    display: 'swap',
});

export default montserrat;
