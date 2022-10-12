import React, { memo, useEffect } from 'react';
import { Drawer, Layout } from 'tdesign-react';
import { useRoutes, useLocation,useNavigate } from 'react-router-dom';
import throttle from 'lodash/throttle';
import { useAppSelector, useAppDispatch } from 'modules/store';
import { selectGlobal, toggleSetting, toggleMenu, ELayout, switchTheme } from 'modules/global';
import Setting from './components/Setting';
import AppLayout from './components/AppLayout';
import Style from './index.module.less';
import { useSelector,useDispatch} from 'react-redux'  // 引入两个必要的钩子

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  const AppContainer = AppLayout[globalState.isFullPage ? ELayout.fullPage : globalState.layout];

  const user = useSelector((state:any)=>state.user); 
  const location = useLocation();
  const navigate = useNavigate();

  // 路由监听
  useEffect(() => {
    if (location.pathname!=='/login') {
        if (!user.token) {
          navigate('/login')
        }  
    } 
  }, [location]);

  useEffect(() => {
    dispatch(switchTheme(globalState.theme));
    const handleResize = throttle(() => {
      if (window.innerWidth < 900) {
        dispatch(toggleMenu(true));
      } else if (window.innerWidth > 1000) {
        dispatch(toggleMenu(false));
      }
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className={Style.panel}>
      <AppContainer />
      <Drawer
        destroyOnClose
        visible={globalState.setting}
        size='458px'
        footer={false}
        header='页面配置'
        onClose={() => dispatch(toggleSetting())}
      >
        <Setting />
      </Drawer>
    </Layout>
  );
});
