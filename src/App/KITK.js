import React from 'react';
import ReactDOM from 'react-dom';

import VisibilitySensor from 'react-visibility-sensor';

class KITK extends React.Component {
 constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
 }

onChange(isVisible) {
  if ( isVisible === true ) {
    this.props.changeColour('#f1e8e8', 'images/kitk-t.jpg');
  } 
}

	render() {
		return (
  		<div className='kitk container l-row'>
				<section className='l-section-left l-custom overlay'>
          <VisibilitySensor
            onChange={this.onChange}
            intervalDelay={1600}
            offset={{top:50}}
          >
          {({isVisible}) =>
            <div className={'m-animate ' + (isVisible ? 'is-up' : '')}>
              <h1>KITK</h1>
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

export default KITK