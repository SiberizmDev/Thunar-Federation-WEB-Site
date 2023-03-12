import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Thunar Federasyonu',

  origin: 'https://thunarfederation.vercel.app/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Thunar Federasyonu ・ Siber Güvenlik ve Modern Tasarımın Öncüleri',
  description:
    'Hem güvenlik, hemde yeni nesil teknolojileri içerisinde bulunduran şirketimiz ile arkadaşlarınıza hava atın',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
