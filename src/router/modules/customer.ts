import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const customer: IRouter[] = [
  {
    path: '/customer',
    isFullPage: true,
    meta: {
      title: '客服',
      Icon: UserCircleIcon,
    },
    Component: lazy(() => import('pages/Customer'))
  },
];

export default customer;
