import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Kapgan Federasyonu',

  origin: 'https://Kapganfederation.vercel.app/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Kapgan Federasyonu ・ Siber Güvenlik ve Modern Tasarımın Öncüleri',
  description:
    'Hem güvenlik, hemde yeni nesil teknolojileri içerisinde bulunduran şirketimiz ile arkadaşlarınıza hava atın',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
