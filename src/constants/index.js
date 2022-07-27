export const PUBLIC_LAYOUT = 'default'; 

export const PROFILE_OPTIONS = [
    {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "Index",
          params: {},
        },
      },
      {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
          name: "Index",
          params: {},
        },
      },
      {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "Index",
          params: {},
        },
      },
      {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "Index",
          params: {},
        },
      },
      {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "Logout",
          params: {},
        },
      },
];

export const NAV_BOTTOM_ITEMS = [
  {
    icon: "t2ico-category",
    text: "Index",
    name: "Index",
  },
  {
    icon: "t2ico-chart",
    text: "Report",
    name: "Report",
  },
  {
    icon: "t2ico-presentation",
    text: "Budget",
    name: "Budget",
  },
  {
    icon: "t2ico-profile",
    text: "Profile",
    name: "Profile",
  },
];
