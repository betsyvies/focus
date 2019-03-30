import config from '../config';
const App = config.app;
/* 
  Peticiones
*/

const login = (data, url) => {
  return fetch(config.url + url, {
    method: 'POST',
    body: data,
    headers: {
       'application': App
    }
  }).then(response => {
    return response.json();
  })
}

const getData = url => {
  return fetch(config.url + url, {
    method: 'GET',
    headers: {
      'application': App
    }})
    .then((response) => {
      return response.json()
    })
}

const getDataText = url => {
  return fetch(config.url + url, {
    method: 'GET',
    headers: {
      'application': App
    }})
    .then((response) => {
      return response.text()
    })
}

const postData = (data, jwt, url) => {
  return fetch(config.url + url, {
    method: 'POST',
    body: data,
    headers: {
      'application': App,
      'Authorization': 'Bearer ' + jwt
   }
  }).then(response => {
    return response.json();
  })
}

const postDataText = (data, jwt, url) => {
  return fetch(config.url + url, {
    method: 'POST',
    body: data,
    headers: {
      'application': App,
      'Authorization': 'Bearer ' + jwt
   }
  }).then(response => {
    return response.text();
  })
}

const putData = (data, jwt, url) =>  {
  return fetch(config.url + url, {
    method: 'PUT',
    body: data,
    headers: {
      'application': App,
      'Authorization': 'Bearer ' + jwt
    }
  }).then(response => {
    return response.json();
  })
}

const deleteData = (data, jwt, url) => {
  return fetch(config.url + url, {
    method: 'DELETE',
    body: data,
    headers: {
      'application': App,
      'Authorization': 'Bearer ' + jwt
    }
  }).then(response => {
    return response.json();
  })
}

export {
  login,
  getData,
  postData,
  putData,
  getDataText,
  postDataText,
  deleteData
};