/* Esta acción cambia el nombre del estado inicial por el de la plantilla */
export function getData(dataTable) {
  return {
    type: 'GET_DATA',
    dataTable
  };
}

export function getTpmlUser(dataTpmlUser) {
  return {
    type: 'GET_TMPL_USER',
    dataTpmlUser
  };
}

export function getHtmlParser(htmlParser) {
  return {
    type: 'GET_HTML_PARSER',
    htmlParser
  };
}

export function changeStateLoader(stateLoader) {
  return {
    type: 'CHANGE_STATE_LOADER',
    stateLoader
  };
}

export function changeDataAlert(dataAlert) {
  return {
    type: 'CHANGE_DATA_ALERT',
    dataAlert
  };
}