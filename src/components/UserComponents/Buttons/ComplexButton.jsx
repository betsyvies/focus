import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  root: {
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 300,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  container: {
    width: '100%',
    height: '300px',
    marginBottom: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },  
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

/* Este componente renderiza dos botones que funcionan como filtros para acceder a las otras vistas */
const ButtonBases =  ({classes, images, onChangeNameTemplate}) => (
  <div className={classes.root}>
    {images.map(image => (
      <div key={image.title} className={classes.container}>
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
            float: image.float,
            }
          }
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
            <Link to={`/${image.id}`} key={image.id} className={classes.link}>
              {image.title}
              <span className={classes.imageMarked} />
            </Link> 
            </Typography>
          </span>
        </ButtonBase>
        <p style={{width: '40%', marginLeft: '3rem'}}>It is a long established fact that a reader will be distracted 
        by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal 
        distribution of letters, as opposed to using 'Content here, content 
        here', making it look like readable English.</p>
      </div>
    ))}
  </div>
)

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    float: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default withStyles(styles)(ButtonBases);
