import {FontIcons} from '../../assets/icons';
import * as Screens from '../../screens/index';
import * as MyCart from '../../screens/index';
import _ from 'lodash';

export const AdminRoutes = [
  {
    id: 'AdminDashboardsMenu',
    title: 'Admin Dashboard',
    icon: FontIcons.dashboard,
    screen: Screens.AdminDashboardMenu,
    children: [{
      id: 'AdminDashboard',
      title: 'AdminDashboard',
      screen: Screens.AdminDashboard,
      children: []
    }
    /*{
      id: 'GridV1',
      title: 'Grid Menu V1',
      screen: Screens.GridV1,
      children: []
    }*/]
  }
];

export const VendorRoutes = [
  {
    id: 'VendorDashboardsMenu',
    title: 'Vendor Dashboard',
    icon: FontIcons.dashboard,
    screen: Screens.VendorDashboardMenu,
    children: [{
      id: 'VendorDashboard',
      title: 'VendorDashboard',
      screen: Screens.VendorDashboard,
      children: []
    }
    /*{
      id: 'GridV1',
      title: 'Grid Menu V1',
      screen: Screens.GridV1,
      children: []
    }*/]
  }
];

export const MainRoutes = [
  /*,
  {
    id: 'SocialMenu',
    title: 'Social',
    icon: FontIcons.profile,
    screen: Screens.SocialMenu,
    children: [
      {
        id: 'ProfileV1',
        title: 'User Profile V1',
        screen: Screens.ProfileV1,
        children: []
      },
      {
        id: 'ProfileV2',
        title: 'User Profile V2',
        screen: Screens.ProfileV2,
        children: []
      },
      {
        id: 'ProfileV3',
        title: 'User Profile V3',
        screen: Screens.ProfileV3,
        children: []
      },
      {
        id: 'ProfileSettings',
        title: 'Profile Settings',
        screen: Screens.ProfileSettings,
        children: []
      },
      {
        id: 'Notifications',
        title: 'Notifications',
        screen: Screens.Notifications,
        children: []
      },
      {
        id: 'Contacts',
        title: 'Contacts',
        screen: Screens.Contacts,
        children: []
      },
      {
        id: 'Feed',
        title: 'Feed',
        screen: Screens.Feed,
        children: []
      },
    ]
  } */
  {
    id: 'DashboardsMenu',
    title: 'Dashboard',
    icon: FontIcons.dashboard,
    screen: Screens.DashboardMenu,
    children: [{
      id: 'Dashboard',
      title: 'Dashboard',
      screen: Screens.Dashboard,
      children: []
    },]
  },
  {
    id: 'ArticlesMenu',
    title: 'Energy Solutions',
    icon: FontIcons.article,
    screen: Screens.ArticleMenu,
    children: [
      {
        id: 'Articles1',
        title: 'Article List V1',
        screen: Screens.Articles1,
        children: []
      },
      {
        id: 'Articles2',
        title: 'Article List V2',
        screen: Screens.Articles2,
        children: []
      },
      {
        id: 'Articles3',
        title: 'Article List V3',
        screen: Screens.Articles3,
        children: []
      },
      {
        id: 'Articles4',
        title: 'Article List V4',
        screen: Screens.Articles4,
        children: []
      },
      {
        id: 'Blogposts',
        title: 'Blogposts',
        screen: Screens.Blogposts,
        children: []
      },
      {
        id: 'ScheduleService',
        title: 'Schedule View',
        screen: Screens.ScheduleService,
        children: []
      },
      {
      id: 'ScheduleSuccess',
      title: 'Schedule confirmation',
      screen: Screens.ScheduleSuccess,
      children: []
    },
    {
    id: 'LeaseSuccess',
    title: 'Lease Confirmation',
    screen: Screens.LeaseSuccess,
    children: []
  }
    ]
  },
  {
    id: 'RentServiceMenu',
    title: 'Rent',
    icon: FontIcons.navigation,
    screen: Screens.RentServiceMenu,
    children: [{
      id: 'RentService',
      title: 'Rent Energy Service',
      screen: Screens.RentService,
      children: []
    },]
  },
  {
      id: 'NavigationMenu',
      icon: FontIcons.navigation,
      title: 'Cart',
      screen: Screens.NavigationMenu,
      children: [
        {
          id: 'GridV1',
          title: 'Grid Menu V1',
          screen: Screens.GridV1,
          children: []
        },
        {
          id: 'GridV2',
          title: 'Grid Menu V2',
          screen: Screens.GridV2,
          children: []
        },
        {
        id: 'Cart',
        title: 'My Cart',
        screen: MyCart.Cart,
        children: []
      },
      {
      id: 'PaymentType',
      title: 'PaymentType',
      screen: Screens.PaymentType,
      children: []
    },
    {
    id: 'Installment',
    title: 'Installment',
    screen: Screens.Installment,
    children: []
  },
    {
    id: 'Payments',
    title: 'Payments',
    screen: Screens.Payments,
    children: []
  },
  {
  id: 'PaymentConfirm',
  title: 'Payment Confirmation',
  screen: Screens.PaymentConfirm,
  children: []
},
        {
          id: 'Side',
          title: 'Side Menu',
          action: 'DrawerOpen',
          screen: Screens.SideMenu,
          children: []
        }
      ]
    },{
      id: 'Upgrade',
      title: 'Upgrade',
      icon: FontIcons.theme,
      screen: Screens.Upgrade,
      children: []
    },
  {
    id: 'EcommerceMenu',
    title: 'Payment',
    icon: FontIcons.card,
    screen: Screens.EcommerceMenu,
    children: [
      {
        id: 'Cards',
        title: 'Cards',
        icon: FontIcons.card,
        screen: Screens.Cards,
        children: []
      },
      {
        id: 'AddToCardForm',
        title: 'Add To Card Form',
        icon: FontIcons.addToCardForm,
        screen: Screens.AddToCardForm,
        children: []
      },

    ]
  },

  /*{
    id: 'MessagingMenu',
    title: 'Messaging',
    icon: FontIcons.mail,
    screen: Screens.MessagingMenu,
    children: [
      {
        id: 'Chat',
        title: 'Chat',
        screen: Screens.Chat,
        children: []
      },
      {
        id: 'ChatList',
        title: 'Chat List',
        screen: Screens.ChatList,
        children: []
      },
      {
        id: 'Comments',
        title: 'Comments',
        screen: Screens.Comments,
        children: []
      },
    ]
  },*/

  {
    id: 'OtherMenu',
    title: 'Settings',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: []
      }
    ]
  },
  {
    id: 'Themes',
    title: 'Themes',
    icon: FontIcons.theme,
    screen: Screens.Themes,
    children: []
  },
  {
      id: 'WalkthroughMenu',
      title: 'About App',
      icon: FontIcons.mobile,
      screen: Screens.WalkthroughMenu,
      children: [{
        id: 'Walkthrough',
        title: 'Walkthrough',
        screen: Screens.WalkthroughScreen,
        children: []
      }]
  },
  {
      id: 'LoginMenu',
      title: 'Sign Out',
      icon: FontIcons.login,
      screen: Screens.LoginMenu,
      children: [
        {
          id: 'Login2',
          title: 'Login V2',
          screen: Screens.LoginV2,
          children: []
        },
        {
          id: 'SignUp',
          title: 'Sign Up',
          screen: Screens.SignUp,
          children: []
        },
        {
          id: 'password',
          title: 'Password Recovery',
          screen: Screens.PasswordRecovery,
          children: []
        },
      ]
    },
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'Login2',
  title: 'Login V2',
  screen: Screens.LoginV2,
  children: []
},);

export const MenuRoutes = menuRoutes;
