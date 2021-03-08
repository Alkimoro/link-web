
let cachedApp:any;

function setApp(app:any) {
  cachedApp = app;
}

function getApp() {
  return cachedApp;
}

export {
  setApp,
  getApp,
};
