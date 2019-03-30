import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import ControlCard from '../../../components/AdmComponents/ControlCard';
import table from '../../../assets/svg/data-table.svg';
import employee from '../../../assets/svg/employee.svg';
import build from '../../../assets/svg/tools.svg';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  contentTitle: {
    textAlign: 'center',
    marginTop: '5rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5rem'
  },
  cover: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 350,
  },
  link: {
    textDecoration: 'none',
    margin: '1rem'
  }
});

var cardLink = [
  {path:'list-templates', title: 'Lista de plantillas', color: '#ECA549', image: table},
  {path:'list-users', title: 'Lista de usuarios', color: '#ECA549', image: employee},
  {path:'list-indicators', title: 'Lista de indicadores', color: '#ECA549', image: build}
]

class AdmSelect extends Component {
  render() {
    const {classes, name} = this.props
    return (
      <section className={classes.container}>
        <div>
          <h1 className={classes.contentTitle}>Bienvenido {name}</h1>
          <div className={classes.cover}>
            {
              cardLink.map((elem,index) => {
                return(
                  <Link key={index} to={`/${elem.path}`} className={classes.link}>
                    <ControlCard title={elem.title} color={elem.color} image={elem.image}/>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }

}

AdmSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AdmSelect);