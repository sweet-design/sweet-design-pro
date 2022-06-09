/**
 * @name 基于plugin-initial-state来生成权限数据，即权限的定义依赖于初始数据
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: (route: any) => {
      console.log('路由数据', route);
      return currentUser && currentUser.access === 'admin';
    },
  };
}
