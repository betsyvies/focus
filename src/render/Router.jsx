import React, { Component } from 'react';

import LoginSection from '../containers/LoginContainers/LoginSection';
//import SectionSelectTemplate from '../containers/UserContainers/SectionSelectTemplate';
import GetTemplates from '../containers/UserContainers/GetTemplates';
import EditorSection from '../containers/UserContainers/EditorSection';
import PreviewDataSection from '../containers/UserContainers/PreviewDataSection';
import PreviewSection from '../containers/AdmContainers/PreviewSection';
import ConfiSection from '../containers/AdmContainers/ConfiSection';
import ListsSections from '../containers/AdmContainers/ListsSections';
import AdmSelect from '../containers/AdmContainers/AdmSelect';
import Home from '../components/MainComponents/Home';

import { Route } from 'react-router';

/* Array de las rutas para los componentes de transición*/
const routesEstudents = [
  //{ id: 's1', section: GetTemplates, path: 'get-templates' },
  { id: 's2', section: EditorSection, path: 'editor-section/:id' },
  { id: 's3', section: PreviewDataSection, path: 'preview-data-section/:id' },
]

const routesAdmi = [
  { id: 's1', section: ListsSections, path: 'list-templates' },
  { id: 's2', section: ListsSections, path: 'list-users' },
  { id: 's3', section: ListsSections, path: 'list-indicators' },
  { id: 's4', section: ListsSections, path: 'list-assignments' },
  { id: 's5', section: PreviewSection, path: 'preview-section/:id' },
  { id: 's6', section: ConfiSection, path: 'confi-section/:id' },
  { id: 's7', section: EditorSection, path: 'editor-section/:id' },
  { id: 's8', section: PreviewDataSection, path: 'preview-data-section/:id' },
]

class RouterComponent extends Component {

  signedInRoutes() {
    if (this.props.user.jwt) {
      if (this.props.user.role === 'ADMIN_ROLE') {
        return (
          routesAdmi.map(i =>
            <div key={i.id}>
              <Route path={`/${i.path}`} component={i.section} />
            </div>
          )
        );
      } else {
        return (
          routesEstudents.map(i =>
            <div key={i.id}>
              <Route path={`/${i.path}`} component={i.section} />
            </div>
          )
        );
      }
    }
  }

  home() {
    if (this.props.user.jwt) {
      if (this.props.user.role === 'ADMIN_ROLE') {
        return AdmSelect;
      } else {
        return GetTemplates;
      }
    } else {
        return Home;
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={this.home()}></Route>z
        <Route path="/login" component={LoginSection} />
        {this.signedInRoutes()}
      </div>
    );
  }
}

export default RouterComponent;