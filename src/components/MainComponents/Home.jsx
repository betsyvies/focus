import React, {Component} from 'react';
import RightArrow from '../../assets/svg/right-arrow.svg';
import '../../css/app.css'

class Home extends Component {
  render() {
    return (
      <section>
        <div className={'background'}>
          <h1 className={'title-home'}>Editor de Plantillas</h1>
          <a href='/login' className={'link-home'}>
            <p className={'text-home'}>Crea tu plantilla</p>
            <img src={RightArrow} className={'icon-arrow'} alt={RightArrow}/>
          </a>
        </div>
      </section>
    );
  }

}

export default Home;