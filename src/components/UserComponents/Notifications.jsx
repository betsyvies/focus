import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

/* Estilos para el button */
const themeDisabled = {
  background: '#c3c3c3',
  color: '#fff',
  borderRadius: '2rem',
  float: 'right'
};

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 'success',
    };
  }

  createNotification = (type) => {
    switch (type) {
      case 'info':
        return NotificationManager.info('Info message');
      case 'success':
        return NotificationManager.success('Success message', 'Title here');
      case 'warning':
        return NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
      case 'error':
        return NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
    }
  };
 
  render() {
    return (
      <div>
        <button style={themeDisabled}
          onClick={this.createNotification(this.state.option)}>
          Success
        </button>
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notifications;