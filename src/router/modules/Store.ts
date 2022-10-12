import { lazy } from 'react';
import { UserCircleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/store',
    meta: {
      title: '店铺信息',
      Icon: UserCircleIcon,
    },
    Component: lazy(() => import('pages/Store'))
  },
];

export default result;
