import React, { Component } from 'react';
import { getDataText } from '../../../request';
import { routes } from '../../../helper/formData';
import PropTypes from 'prop-types';
import 'brace';
import 'brace/mode/html';
import 'brace/theme/solarized_dark';
import AceEditor from 'react-ace';
import '../../../css/editor.css';

class Editor extends Component {
  componentWillMount = () => {
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');
    var id = arrPath.pop();
    var view = arrPath[1]

    if ('preview-section' === view) {
      const route = routes('templates/preview', id)
      getDataText(route).then(
        (table) => {
          if (table !== 'Sin contenido') {
            this.props.onUpdateHtml(table)
          } else { 
            this.props.onUpdateHtml('<div>No hay data</div>')
          }
        }
      ).catch(console.log);
    }
  } 
  onEditorChange(html) {
    this.props.onUpdateHtml(html);
  }
  onEditorLoad(editor) {
    editor.session.setUseWorker(false);
    editor.session.setUseWrapMode(true);
  }
  generateEditor(view) {
    const editorProps = {
      $blockScrolling: Infinity,
      wrap: true
    };

    if (view === 'html') {
      const { html } = this.props;
      return <AceEditor mode="html"
                        theme="solarized_dark"
                        name="HTML_EDITOR"
                        value={ html }
                        width="100%"
                        height="auto"
                        onChange={ value => this.onEditorChange(value) }
                        onLoad={ editor => this.onEditorLoad(editor) }
                        editorProps={ editorProps }
      />;
    }
  }

  render() {
    const { view } = this.props;
    return (
      <div id="editor">
        { this.generateEditor(view) }
      </div>
    );
  }
}

Editor.propTypes = {
  html: PropTypes.string.isRequired,
  onUpdateHtml: PropTypes.func.isRequired
};

export default Editor;
