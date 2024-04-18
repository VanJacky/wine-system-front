import Cookies from 'js-cookie'


// export function getToken() {
//   return Cookies.get(TokenKey)
// }
//
// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const TokenKey = 'accessToken';
const RoleKey = 'role';
const TokenPrefix = 'Bearer ';
const isLogin = () => {
  return !!localStorage.getStorageSync(TokenKey);
};
const getToken = () => {
  return localStorage.getItem(TokenKey);
};
const setToken = (token) => {
  localStorage.setItem(TokenKey, token);
};
const setRole = (role) => {
  localStorage.setItem(RoleKey, role);
};
const clearToken = () => {
  localStorage.clear();
};
const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  localStorage.setItem(name, content);
};

const getStore = (name) => {
  if (!name) return;
  let v = localStorage.getItem(name);
  if (v == null) {
    return '';
  }
  return v;
};
const removeStore = (name) => {
  if (!name) return;
  localStorage.clear();
};
export { TokenPrefix, isLogin, getToken, setToken, clearToken, setStore, getStore, removeStore, setRole };
