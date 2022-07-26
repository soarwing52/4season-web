import Cookies from 'universal-cookie';
const cookies = new Cookies();

function setToken(token, name) {
  cookies.set(name, token, { path: '/' });
};

function getCookie(name) {
  if (cookies.get(name) === undefined) {
    return '';
  }
  return cookies.get(name);
};

function RemoveCookie(name) {
  cookies.remove(name, { path: "/" });
}

export { setToken, getCookie, RemoveCookie };