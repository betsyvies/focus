import { objTemp } from './tempString.js'

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/home');
  } else if (hash === '#/loginMentora' || hash === '#/accesorios' || hash === '#/lugares' || hash === '#/dashboard') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/different');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const container = document.getElementById("container")
  container.innerHTML = objTemp[router];
  const loginMentora = document.getElementById('btnLoginMentora')
  loginMentora.addEventListener('click', () => {
    window.location.hash = '/loginMentora';
  })
}

window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
