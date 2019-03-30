import React from 'react';
import Header from './Header';
import Editor from '../../../containers/AdmContainers/Editor';
import Html from '../../../containers/AdmContainers/HtmlParser';
import Configurations from '../../../containers/AdmContainers/Configurations'
import '../../../css/app.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: '',
      style: {display: 'inline-block'},
      styleConteiner: {}
    };
  }

  componentWillMount = () => {
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');
    var view = arrPath[1]

    if ('confi-section' === view) {
      var component = <Configurations/>
      this.setState({ component });
      this.setState({ style: {display: 'none'} });
      this.setState({ styleConteiner: {marginTop: '3rem'} });
    } 
  }

  render() {
    const { html, method, idEmail, jwt } = this.props
    const { style, styleConteiner, component } = this.state
    return (
      <div id="app" style={styleConteiner}>
        <Header html={html} method={method} idEmail={idEmail} style={style} jwt={jwt}/>
        <main id="content">
          {component}
          <Editor/>
          <Html/>
        </main>
      </div>
    );
  }
}

export default Preview;