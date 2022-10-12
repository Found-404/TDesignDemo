import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const oneDemo: IRouter[] = [
  {
    path: '/demo',
    meta: {
      title: '首页',
      Icon: DashboardIcon,
    },
    Component: lazy(() => import('pages/Demo')),
  },
];

export default oneDemo;
