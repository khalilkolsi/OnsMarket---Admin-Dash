interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Page d\'Accueil',
    url: '/homePage',
    icon: 'icon-puzzle',
  },
  {
    name: 'Ajout de la Seamine ',
    url: '/ajoutSemain',
    icon: 'icon-plus',
  },
  {
    name: 'Promotion',
    url: '/promotion',
    icon: 'icon-basket-loaded',
    children: [
      {
        name: 'Crée une Promotion',
        url: '/promotion/create',
        icon: 'icon-pencil'
      },
      {
        name: 'Promotions Actuelles',
        url: '/promotion/current',
        icon: 'icon-tag'
      }
    ]
  },
  {
    name: 'Notification',
    url: '/notification',
    icon: 'icon-bell',
  },
  {
    name: 'Slider',
    url: '/slider',
    icon: 'icon-grid',
  },
];

