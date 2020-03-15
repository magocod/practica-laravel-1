/**
 *
 */

const state = {

  // items sidebar derecha
  itemsright: [
    {
      href: 'home',
      router: true,
      title: 'home',
      icon: 'home',
    },
    {
      href: 'home',
      router: true,
      title: 'Advanced search',
      icon: 'search',
    },
  ],

  // items sidebar izquierda
  itemsleft: [
    {
      action: 'more',
      title: 'information',
      items: [
        {
          href: 'home',
          router: true,
          title: 'repository',
          icon: 'dns',
        },
        {
          href: 'home',
          router: true,
          title: 'coming soon',
          icon: 'grade',
        },
      ],
    },
    {
      action: 'work',
      title: 'collections',
      items: [
        {
          href: 'title_search',
          router: true,
          title: 'title',
          icon: 'keyboard_hide',
        },
        {
          href: 'category_list',
          router: true,
          title: 'category',
          icon: 'description',
        },
        {
          href: 'theme_list',
          router: true,
          title: 'thematic',
          icon: 'content_paste',
        },
        {
          href: 'author_list',
          router: true,
          title: 'author',
          icon: 'account_box',
        },
        {
          href: 'recents',
          router: true,
          title: 'recent',
          icon: 'next_week',
        },
        {
          href: 'home',
          router: true,
          title: 'coming soon',
          icon: 'extension',
        },
      ],
    },
    {
      action: 'memory',
      title: 'Api',
      items: [
        {
          href: 'api_info',
          router: true,
          title: 'Repository',
          icon: 'account_balance_wallet',
        },
      ],
    },
  ],
  // footer
  itemsfooter: [
    {
      href: 'home',
      router: true,
      title: 'about',
      icon: 'home',
    },
    {
      href: 'footer_unefa',
      router: true,
      title: 'UNEFA',
      icon: 'home',
    },
    {
      href: 'home',
      router: true,
      title: 'UNEFA-VIRTUAL',
      icon: 'home',
    },
    {
      href: 'home',
      router: true,
      title: 'Contact',
      icon: 'home',
    },
  ],

  // infomacion footer unefa
  unefa: {
    name: 'unefa',
    title: 'National Polytechnic Experimental University of the Bolivarian Armed Forces',
    // tslint:disable-next-line
    imagen: 'https://firebasestorage.googleapis.com/v0/b/vue-spa-1.appspot.com/o/information%2Funefa.jpg?alt=media&token=31b96045-0083-4074-ace5-5ecb23777140',
    description: 'description',
    url: 'http://www.unefa.edu.ve',
  },

};

export const manager = {
  namespaced: true,
  state,
};
