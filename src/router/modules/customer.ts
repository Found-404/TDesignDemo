import { lazy } from 'react';
import { UserTalkIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const customer: IRouter[] = [
  {
    path: '/customer',
    isFullPage: true,
    meta: {
      title: '客服',
      Icon: UserTalkIcon,
    },
    Component: lazy(() => import('pages/Customer'))
  },
];

export default customer;
