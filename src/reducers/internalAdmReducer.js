const columnData = [
  { pathName:'/list-templates',
    data: [
      { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
      { id: 'type', numeric: true, disablePadding: false, label: 'Tipo' },
      { id: 'user', numeric: true, disablePadding: false, label: 'Usuario' },
      { id: 'operations', numeric: true, disablePadding: false, label: 'Operaciones' },
      { id: 'state', numeric: true, disablePadding: false, label: 'Estado' }
    ]
  },
  { pathName:'/list-users',
    data: [
      { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
      { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
      { id: 'role', numeric: true, disablePadding: false, label: 'Rol' },
      { id: 'operations', numeric: true, disablePadding: false, label: 'Operaciones' },
      { id: 'state', numeric: true, disablePadding: false, label: 'Estado' }
    ]
  },
  { pathName:'/list-indicators',
    data: [
      { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
      { id: 'variable', numeric: true, disablePadding: false, label: 'Variable' },
      { id: 'type', numeric: true, disablePadding: false, label: 'Tipo' },
      { id: 'operations', numeric: true, disablePadding: false, label: 'Operaciones' },
      { id: 'state', numeric: true, disablePadding: false, label: 'Estado' }
    ]
  },
  { pathName:'/list-assignments',
    data: [
      { id: 'company', numeric: false, disablePadding: true, label: 'Empresa' },
      { id: 'desktop', numeric: true, disablePadding: false, label: 'Escritorio' },
      { id: 'tracing', numeric: true, disablePadding: false, label: 'Segimiento' },
      { id: 'guidelines', numeric: true, disablePadding: false, label: 'Pautas' },
      { id: 'template', numeric: true, disablePadding: false, label: 'Plantilla' },
      { id: 'operations', numeric: true, disablePadding: false, label: 'Operaciones' },
      { id: 'state', numeric: true, disablePadding: false, label: 'Estado' }
    ]
  }
];

const nameView = [
  {pathName:'/list-templates', view:'Plantillas' },
  {pathName:'/list-users', view:'Usuarios' },
  {pathName:'/list-indicators', view: 'Indicadores' },
  {pathName:'/list-assignments', view: 'Asignaciones' }
]

const initialState = {
  html: '<div>Example HTML string</div>',
  view: 'html',
  columnData: columnData,
  nameView: nameView,
  dataTable: [],
  method: 'put',
  idEmail: '',
  selected: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_HTML':
      return {
        ...state,
        html: action.html
      };
    case 'SET_VIEW':
      return {
        ...state,
        view: action.view
      };
    case 'CREATE_DATA':
      return {
        ...state,
        data: action.data
      };
    case 'GET_DATA':
      return {
        ...state,
        dataTable: action.dataTable
      };
    case 'GET_METHOD':
      return {
        ...state,
        method: action.method
      };
    case 'GET_ID_EMAIL':
      return {
        ...state,
        idEmail: action.idEmail
      };
    case 'GET_SELECTED':
      return {
        ...state,
        selected: action.selected
      };
    default:
      return state;
  }
}