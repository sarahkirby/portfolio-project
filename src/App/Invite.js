import React from 'react';
import ReactDOM from 'react-dom';

import VisibilitySensor from 'react-visibility-sensor';

class Invite extends React.Component {
 constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
 }

onChange(isVisible) {
  if ( isVisible === true ) {
    this.props.changeColour('#e8ebf8', '0px -1100px');
  } 
}

	render() {
		return (
  		<div className='invite container l-row'>
      
				<section className='l-section-left l-custom overlay'>
          <VisibilitySensor
            onChange={this.onChange}
            intervalDelay={1600}
            offset={{top:50}}
          >
            <h1>Kelly & Eric</h1>
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

export default Invite