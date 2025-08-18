import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineCog,
  HiQuestionMarkCircle,
} from 'react-icons/hi';
import { AiOutlineApartment } from 'react-icons/ai';
import { MdOutlineHomeRepairService } from 'react-icons/md';

export const DashboardTop = [
  {
    key: 'Home',
    label: 'Home',
    path: '/dashboard',
    icon: <HiOutlineHome />,
    sublinks: [],
  },
  {
    key: 'Product',
    label: 'Product',
    path: '/product',
    icon: <HiQuestionMarkCircle />,
    sublinks: [
      {
        key: 'ProductSublink1',
        label: 'Add Product',
        path: '/product/add',
      },
      {
        key: 'ProductSublink2',
        label: 'View Products',
        path: '/product/view',
      },
    ],
  },
  // {
  //   key: 'Partners',
  //   label: 'Partners',
  //   path: '/partners',
  //   icon: <MdOutlineHomeRepairService />,
  //   sublinks: [
  //     {
  //       key: 'PartnersSublink1',
  //       label: 'Add Partners',
  //       path: '/partners/add',
  //     },
  //     {
  //       key: 'PartnersSublink2',
  //       label: 'View Partners',
  //       path: '/partners/view',
  //     },
  //   ],
  // },
  // {
  //   key: 'Testimonials',
  //   label: 'Testimonials',
  //   path: '/testimonials',
  //   icon: <HiOutlineUsers />,
  //   sublinks: [
  //     {
  //       key: 'TestimonialsSublink1',
  //       label: 'Add Testimonials',
  //       path: '/testimonials/add',
  //     },
  //     {
  //       key: 'TestimonialsSublink2',
  //       label: 'View Testimonials',
  //       path: '/testimonials/view',
  //     },
  //   ],
  // },
  // {
  //   key: 'Teams',
  //   label: 'Teams',
  //   path: '/teams',
  //   icon: <HiOutlineUsers />,
  //   sublinks: [
  //     {
  //       key: 'TeamsSublink1',
  //       label: 'Add Team',
  //       path: '/team/add',
  //     },
  //     {
  //       key: 'TeamsSublink2',
  //       label: 'View Teams',
  //       path: '/team/view',
  //     },
  //   ],
  // },
  // {
  //   key: 'Subscribers',
  //   label: 'Subscribers',
  //   path: '/subscriber',
  //   icon: <HiOutlineUsers />,
  //   sublinks: [
  //     {
  //       key: 'SubscriberSublink2',
  //       label: 'View Subscribers',
  //       path: '/subscriber',
  //     },
  //   ],
  // },
];

export const DashboardBottom = [
  {
    key: 'register',
    label: 'Register',
    path: '/register',
    icon: <HiOutlineCog />,
  },
];
