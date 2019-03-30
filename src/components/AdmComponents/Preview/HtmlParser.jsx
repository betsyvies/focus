import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import '../../../css/html.css';

export default function Html(props) {
  const { html} = props;

  return (
    <div id="html">
      { ReactHtmlParser(html) }
    </div>
  );
}

Html.propTypes = {
  html: PropTypes.string.isRequired
};