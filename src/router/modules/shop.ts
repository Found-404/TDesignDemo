import React from 'react'
import { lazy } from 'react';

import { IRouter } from '../index'
const shop:IRouter[] = [
    {
        path:"/shop",
        meta:{
            title:'商品'
        },
        children:[
            {
                path:"shopadd",
                Component: lazy(() => import('pages/Shop/Addshop')),
                meta: {
                  title: '添加商品',
                }
            },
            {
                path:"shoplist",
                Component: lazy(() => import('pages/Shop/Shoplist')),
                meta: {
                  title: '商品列表',
                }
            },
            {
                path:"shopsort",
                Component: lazy(() => import('pages/Shop/Shopsort')),
                meta: {
                  title: '商品分类',
                }
            },
            {
                path:"brand",
                Component: lazy(() => import('pages/Shop/Brand')),
                meta: {
                  title: '品牌管理',
                }
            },
        ]
    }
]
export default shop