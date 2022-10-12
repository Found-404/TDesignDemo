import { lazy } from 'react';
import { QueueIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/order',
    meta: {
      title: '订单',
      Icon: QueueIcon,
    },
    children: [
      {
        path: 'orderlist',
        Component: lazy(() => import('pages/Order/Orderlist')),
        meta: {
          title: '订单列表',
        },
      },
      {
        path: 'returngoods',
        Component: lazy(() => import('pages/Order/ReturnGoods')),
        meta: { title: '退货申请处理' },
      },
    ],
  },
];

export default result;
