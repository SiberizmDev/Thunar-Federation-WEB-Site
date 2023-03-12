import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'İndir',
      href: getPermalink('/download'),
    },
    {
      text: 'Hakkında',
      href: getPermalink('/about'),
    },
    {
      text: 'GitHub',
      href: 'https://github.com/AhmetinzmSec',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Yönetim',
      links: [
        { text: 'Özellikler', href: 'https://wiki.cachyos.org/en/home/features' },
        { text: 'Takım', href: getPermalink('/about#team') },
      ],
    },
    {
      title: 'Destek',
      links: [
        { text: 'Dokümanlar', href: 'https://wiki.cachyos.org/' },
        { text: 'Topluluk', href: 'https://forum.cachyos.org/' },
      ],
    },
    {
      title: 'Şirket',
      links: [
        { text: 'Hakkında', href: getPermalink('/about#company') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Kullanım Şartları', href: '#' },
    { text: 'Gizlilik Sözleşmesi', href: '#' },
  ],
  socialLinks: [
    { arialabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/AhmetinzmSec' },
    { arialabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/JAPEAajAmu' },
    { arialabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AhmetinzmSec' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(~/assets/images/logo.svg)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://cachyos.org/"> CachyOS</a> · All rights reserved.
  `,
};
