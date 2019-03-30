import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import dataUrl from '../../../config'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  root: {
    minWidth: 300,
    width: '100%',
  },
  card: {
    width:' 18.6%',
    display: 'inline-block',
    margin: '0.5rem',
    textAlign: 'left !important',
  },
  avatarIcon: {
    backgroundColor: red[500],
  },
  templateImg: {
    height: '0',
    paddingTop: '56.25%',
  },
  containerBotton: {
    paddingBottom: '1rem',
    paddingTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    background: '#eca549',
    color: '#fff',
    marginLeft: '1rem',
    marginRight: '1rem',
    heigth: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
});

function getData(tab, dataTable, dataTpmlUser) {
  if (tab === 'Plantillas') {
    return dataTable
  } else {
    return dataTpmlUser
  }
}

/* Renderiza los cards de plantillas */
const RecipeReviewCard = ({classes, dataTable, dataTpmlUser, tab}) => (

  getData(tab, dataTable, dataTpmlUser).length > 0 ?
  getData(tab, dataTable, dataTpmlUser).map(value => (
    <Card key={value._idTmpl} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatarIcon}>
            {value.avatar}
          </Avatar>
        }
        title={value.name}
        subheader={value.date}
      />
      <CardMedia
        className={classes.templateImg}
        image={dataUrl.url + '/image/' + value._idTmpl}
        title={value.name}
      />
      <div className={classes.containerBotton}>
        <Button variant="contained" className={classes.button}>
          <Link to={`/editor-section/` + value._idTmpl} key={value._idTmpl} className={classes.link}>
            Seleccionar
          </Link>
        </Button>
      </div>
    </Card> 
  )): <div></div>
)

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  dataTable: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default withStyles(styles)(RecipeReviewCard);