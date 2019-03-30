import React from 'react';
import red from '@material-ui/core/colors/red';

const primary = {
  background: red[500],
  color: '#fff',
  padding: '0.5rem',
}

export const FormErrors = ({ formErrors }) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i} style={primary}>{fieldName} {formErrors[fieldName]}</p>
        )
      } else {
        return '';
      }
    })}
  </div>