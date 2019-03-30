/* Esta acción envia el token de acceso del usuario */
export function login(jwt) {
  return {
    type: 'LOG_IN',
    jwt
  }
}

/* Esta acción carga la data de los usuarios */
export function loadUser(user) {
  return {
    type: 'LOAD_USER',
    user
  }
}

/* Esta acción es para cerrar sesión */
export function logout() {
  return { type: 'LOG_OUT'  };
}