import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';

import list from './modules/list';
import form from './modules/form';
import oneDemo from './demorouter/oneDemo';
import shop from './modules/shop';
import store from './modules/Store';
import customer from './modules/customer';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
  auth?:boolean
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    }
  },
  {
    path: '/',
    redirect: '/login',
  },
];

// const allRoutes = [...routes, ...dashboard, ...list, ...form, ...detail, ...result, ...user, ...login, ...otherRoutes];
const allRoutes = [...routes,...oneDemo,...shop,...list,...form,...store,...customer];



allRoutes.forEach((tit:IRouter) => {
    if (tit.path === '/login' || tit.path === '/' ) {
      return
    }else{
      // console.log(tit);
      tit.auth = true;
    }
});
export default allRoutes;
