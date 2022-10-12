import { lazy } from 'react';
import { ViewModuleIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/market',
    meta: {
      title: '营销',
      Icon: ViewModuleIcon,
    },
    children: [
      {
        path: 'marketCoupon',
        Component: lazy(() => import('pages/Marketing/Discount')),
        meta: {
          title: '优惠卷列表',
        },
      },
      {
        path: 'activity',
        Component: lazy(() => import('pages/Marketing/Activity')),
        meta: {
          title: '秒杀活动列表',
        },
      }
    ],
  },
];

export default result;
