import React from 'react';
import ReactDOM from 'react-dom';

import VisibilitySensor from 'react-visibility-sensor';

import venturusImg from '../assets/images/venturus-t.jpg';

class Venturus extends React.Component {
 constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
 }

onChange(isVisible) {
  if ( isVisible === true ) {
    this.props.changeColour('#202A48', 'images/venturus-t.jpg');
  } 
}

	render() {
		return (
			<div className='venturus container l-row'>

				<section className='l-section-left l-custom overlay'>
          <VisibilitySensor 
            onChange={this.onChange}
            intervalDelay={1600}
            offset={{top:50}}
          >
          {({isVisible}) =>
            <div className={'m-animate ' + (isVisible ? 'is-up' : '')}>
              <h1>Venturus</h1>
            </div>
          }
          </VisibilitySensor>

          <VisibilitySensor>
            {({isVisible}) =>
              <div className={'l-row l-center m-animate ' + (isVisible ? 'is-up' : '')}>
                <span className="vert-line"></span>
                <button>View Work <span></span></button>
              </div>
            }
          </VisibilitySensor>
        </section>

			</div>
		)
	}
}

export default Venturus