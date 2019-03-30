/*
  Modelo de listado de los contenedores usuarios y plantillas
*/

function data(e, model) {
  switch (model) {
    case 'templates':
      return {
        name: e.name,
        type: e.type,
        user: e.user.email,
        state: e.state,
        _id: e._id,
        company: e.company,
        desktop: e.desktop,
        feed: e.feed,
        table: [e.type, e.user.email]
      };
    case 'users':
      return {
        name: e.name,
        _id: e._id,
        role: e.role,
        email: e.email,
        state: e.state,
        table: [e.email, e.role]
      };
    case 'indicators':
      return {
        name: e.name,
        _id: e._id,
        selector: e.selector,
        type: e.type,
        variable: e.variable,
        state: e.state,
        description: e.description,
        configuration: e.configuration,
        table: [e.variable,e.type]
      };
    case 'tmplPret':
      return {
        name: e.name,
        avatar: e.name.charAt(0),
        type: e.type,
        _idEmail: e._id,
        _idTmpl: e._id,
      }
    default:
      return e;
  }
}

function modelData(newData, model) {
  let dataArr = []
  newData.map(e => {
    let dataModel = data(e, model)
    return dataArr.push(Object.assign({}, dataModel))
  })
  return dataArr
};

export { modelData };