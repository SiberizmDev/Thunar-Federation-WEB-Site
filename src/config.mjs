import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Hackadia',

  origin: 'https://hackadia.vercel.app/',
  basePathname: '/',
  trailingSlash: false,

  title: 'Hackadia ・ Siber Güvenliğin Öncüleri',
  description:
    'Hem güvenlik, hemde yeni nesil teknolojileri içerisinde bulunduran şirketimiz ile arkadaşlarınıza hava atın',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
};

export const SITE = { ...CONFIG };
