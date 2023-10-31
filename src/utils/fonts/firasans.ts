import { Fira_Sans } from 'next/font/google';

const firasans = Fira_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: 'normal',
    preload: true,
    display: 'swap',
});

export default firasans;
