import React from 'react';
import ReactDOM from 'react-dom';

import VisibilitySensor from 'react-visibility-sensor';

class Fwaste extends React.Component {
 constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
 }

onChange(isVisible) {
  if ( isVisible === true ) {
    this.props.changeColour('#ecf0f1', '0px -825px');
  } 
}

	render() {
		return (
  		<div className='fwaste container l-row'>
      
				<section className='l-section-left l-custom overlay'>
          <VisibilitySensor
            onChange={this.onChange}
            intervalDelay={1600}
            offset={{top:50}}
          >
            <h1>F Waste</h1>
          </VisibilitySensor>
          <div className='l-row l-center'>
            <span className='vert-line'></span>
            <button>View Work <span></span></button>
          </div>
        </section>

			</div>
		)
	}
}

export default Fwaste