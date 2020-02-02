import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: {
      icon: 'home',
      pack: 'fa',
    },
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Biographie',
    icon: {
      icon: 'user',
      pack: 'fa',
    },
    link: '/pages/dashboard',
  },
  {
    title: 'Concerts',
    icon: {
      icon: 'calendar-alt',
      pack: 'fas',
    },
    link: '/pages/dashboard',
  },
  {
    title: 'Programmes',
    icon: {
      icon: 'clipboard',
      pack: 'fa',
    },
    link: '/pages/dashboard',
  },
  {
    title: 'Medias',
    icon: {
      icon: 'music',
      pack: 'fa',
    },
    children: [
      {
        title: "Musiques",
        icon: {
          icon: 'user',
          pack: 'fa',
        },
        link: '/pages/dashboard',
      },
      {
        title: "Vidéos",
        icon: {
          icon: 'video',
          pack: 'fa',
        },
        link: '/pages/dashboard',
      },
      {
        title: "Galerie photo",
        icon: {
          icon: 'camera',
          pack: 'fa',
        },
        link: '/pages/dashboard',
      },
    ],
  },
  {
    title: 'Compositions',
    icon: {
      icon: 'book-open',
      pack: 'fas',
    },
    link: '/pages/dashboard',
  },
  {
    title: 'Discographie',
    icon: {
      icon: 'compact-disc',
      pack: 'fas',
    },
    link: '/pages/dashboard',
  },
  {
    title: 'Auth',
    icon: {
      icon: 'user',
      pack: 'fa',
    },
    link: '/auth/login',
    // children: [
    //   {
    //     title: 'Login',
    //     link: '/auth/login',
    //   },
    //   {
    //     title: 'Register',
    //     link: '/auth/register',
    //   },
    //   {
    //     title: 'Request Password',
    //     link: '/auth/request-password',
    //   },
    //   {
    //     title: 'Reset Password',
    //     link: '/auth/reset-password',
    //   },
    // ],
  },
];
