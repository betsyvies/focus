/* Esta acción actualiza la plantilla en la vista previewSection */
export function updateHtml(html) {
  return {
    type: 'UPDATE_HTML',
    html
  };
}

/* Esta acción establece la vista de la plantilla en la vista previewSection */
export function setView(view) {
  return {
    type: 'SET_VIEW',
    view
  };
}

/* Esta acción crea plantillas */
export function createData(data) {
  return {
    type: 'CREATE_DATA',
    data
  };
}

/* Esta acción obtiene la data para las tablas */
export function getData(dataTable) {
  return {
    type: 'GET_DATA',
    dataTable
  };
}

/* Esta acción obtiene el metodo que se usará */
export function getMethod(method) {
  return {
    type: 'GET_METHOD',
    method
  };
}

/* Esta acción obtiene el id del email */
export function getIdEmail(idEmail) {
  return {
    type: 'GET_ID_EMAIL',
    idEmail
  };
}

export function getSelected(selected) {
  return {
    type: 'GET_SELECTED',
    selected
  };
}