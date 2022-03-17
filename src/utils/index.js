/**
 * app.use 按需加载 ant design vue 组件
 * @param {*} app 
 * @param {*} antdvArr 
 * @returns
 */
export const appUse = (app, antdvArr) => {
  antdvArr.forEach(item => {
    app.use(item)
  });
  return app;
}