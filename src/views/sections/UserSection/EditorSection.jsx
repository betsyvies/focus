import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getDataText, getData} from '../../../request';
import { routes } from '../../../helper/formData'
import grapesjs from 'grapesjs';
import moment from 'moment-with-locales-es6';
import HeaderEditionSection from '../../../components/UserComponents/Header/HeaderEditionSection';
import ExampleTemplate from '../../../components/UserComponents/Templates/ExampleTemplate';

const styles = {
  height: {
    height: '90vh',
  },
};

class EditorSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: `<table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="backgroundTable" class="c342" style="box-sizing: border-box; background-color: #fff;">
              <tbody id="i3hj" style="box-sizing: border-box;">
                <tr id="i7xv" style="box-sizing: border-box;">
                  <td align="center" valign="top" id="iyxc" style="box-sizing: border-box;">
                    <table class="sinHeight" border="0" cellpadding="10" cellspacing="0" width="700" height="700" id="templatePreheader" style="box-sizing: border-box;">
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>`,
    };
  }

  /* Invoca la inicialización del plugin grapes inmediatamente después del componente */
  componentDidMount = () => {
    window.localStorage.removeItem('gjs-html');
    moment.locale('es');
    let pathname = window.location.pathname;
    let arrPath = pathname.split('/');
    let id = arrPath.pop()

    const submitTable = id => {
      let route = routes('templates/preview', id)
      getDataText(route).then(
        (table) => {
          if (table !== 'Sin contenido') getTemplateEditor(table)
          else sedTemplateEditor(this.state.html)
        }
      ).catch(console.log);
    }

    if ("USER_ROLE" === this.props.role) {
      submitTable(id)
    } else {
      submitTable(id)
    }

    const getTemplateEditor = (table) => {
      sedTemplateEditor(table)
      this.setState({html: table})
    }
  
    const sedTemplateEditor = (table) => {
      let editor = grapesjs.init({
        showOffsets: 1,
        noticeOnUnload: 0,
        container: '#gjs',
        components: `${table}`,
        storageManager: { autoload: false },
        styleManager: {
          sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
          }, {
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          }, {
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
          }, {
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
          }, {
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
          }
          ],
        }
      });

      let route = routes('indicators', '')
      getData(route)
        .then((indicator) => {
          getDataState(indicator)
        }
      )

      const getDataState = (indicator) => {
        if (indicator.success) {
          indicator.data.docs.map(elem => { 
            let configuration = JSON.parse(elem.configuration)
            return editor.BlockManager.add(elem.selector, configuration);
          })
        }
      }
    }
  }

  render() {
    const { classes, onGetIdEmail, onGetMethod, onChangeDataAlert, method, idEmail, role, idUser, jwt, dataAlert} = this.props
    const { html } = this.state

    return (
      <div className={classes.height}>
        <HeaderEditionSection html={html} onChangeDataAlert={onChangeDataAlert} onGetMethod={onGetMethod} dataAlert={dataAlert} idUser={idUser} role={role} method={method} idEmail={idEmail} jwt={jwt}/>
        <ExampleTemplate onGetIdEmail={onGetIdEmail} method={method}/>
      </div>
    );
  }
}

EditorSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditorSection);