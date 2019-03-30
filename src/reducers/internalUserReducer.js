import TemplateGalery from '../assets/img/TemplateGalery.png';
import YourTemplate from '../assets/img/YourTemplate.png';

/* Array de imagenes para los botones del componente */
const images = [
  {
    url: TemplateGalery,
    title: 'Utilizando una plantilla de la galeria',
    width: '30%',
    float: 'left',
    id: 'get-templates'
  },
  {
    url: YourTemplate,
    title: 'Creando tu plantilla',
    width: '30%',
    float: 'right',
    id: 'editor-section/5bf6c18694c7432c335f0125'
  },
];

const initialState = {
  html: '<div>Example HTML string</div>',
  htmlParser: `<div>Prueba<div/>`,
  notification: 'success',
  images: images,
  dataTpmlUser: [],
  dataTable: [],
  stateLoader: false,
  dataAlert: {open:false}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_HTML':
      return {
        ...state,
        html: action.html
      };
    case 'GET_DATA':
      return {
        ...state,
        dataTable: action.dataTable
      };
    case 'GET_TMPL_USER':
      return {
        ...state,
        dataTpmlUser: action.dataTpmlUser
      };
    case 'GET_HTML_PARSER':
      return {
        ...state,
        htmlParser: action.htmlParser
      };
    case 'CHANGE_STATE_LOADER':
      return {
        ...state,
        stateLoader: action.stateLoader
      };
    case 'CHANGE_DATA_ALERT':
      return {
        ...state,
        dataAlert: action.dataAlert
      };
    default:
      return state;
  }
}
