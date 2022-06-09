import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { SettingDrawer, PageLoading } from '@ant-design/pro-layout';
import type { RunTimeLayoutConfig } from 'umi';
import { history, Link } from 'umi';
import RightContent from '@/components/RightContent';
import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @name 初始化全局数据时请求所需要的loading
 * @see https://pro.ant.design/zh-CN/docs/title-landing/
 */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @name 初始化全局数据
 * @returns {Promise} 异步的全局数据
 * @see https://umijs.org/zh-CN/plugins/plugin-initial-state
 */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg: any = await queryCurrentUser();
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  // 如果不是登录页面将执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings,
    };
  }

  return {
    fetchUserInfo,
    settings: defaultSettings,
  };
}

/**
 * @name pro-layout组件运行时配置
 * @returns {RunTimeLayoutConfig} 返回运行时配置
 * @see https://umijs.org/zh-CN/plugins/plugin-layout
 */
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    pageTitleRender: false,
    breadcrumbRender: false,
    footerRender: false,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link key="docs" to="/~docs" target="_blank">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

/**
 * @name 初始化微应用配置
 */
export const qiankun = new Promise((resolve) => {
  resolve({
    apps: [
      {
        name: 'ees-page',
        entry: '//localhost:3000',
        // 微应用需要的参数，可在微应用钩子中获取
        props: {
          onClick: (event: any) => console.log(event),
          age: 23,
          scholl: 'dsadioasjdiojasiod',
        },
      },
      {
        name: 'ant-vue-pc',
        entry: '//localhost:8080',
      },
    ],
    routes: [
      {
        path: '/ees-page',
        name: 'ees-page',
        microApp: 'ees-page',
        microAppProps: {
          autoSetLoading: true,
          className: 'myContainer',
          wrapperClassName: 'myWrapper',
        },
      },
      {
        path: '/ant-vue-pc',
        name: 'ant-vue-pc',
        microApp: 'ant-vue-pc',
      },
    ],
  });
});
