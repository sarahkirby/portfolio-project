import React from 'react';
import ReactDOM from 'react-dom';

import Venturus from './App/Venturus.js';
import KITK from './App/KITK.js';
import Biome from './App/Biome.js';
import Fwaste from './App/Fwaste.js';
import Invite from './App/Invite.js';

import { biome, fwaste, invite, kitk, venturus } from './App/projectInfo.js';


require('./styles/styles.scss');

class App extends React.Component {
   constructor(props) {
    super(props);
  }

 changeColour(colour, bgPosition) {

  let el = document.getElementsByClassName('fa'),
      rect = document.getElementsByClassName('rect--fixed')[0],
      img = document.getElementsByClassName('rect--image')[0];

  if  ( window.innerWidth > 1020 ) {
    rect.style.backgroundColor = colour;

    for (var i = 0, len = el.length; i < len; i++) {
      el[i].style.color = colour; 
    }
    img.style.backgroundImage = 'url(' + bgPosition + ')'; 
  }
 }

	render() {
		return (
			<div className='main'>

        <div className='rect--fixed'>
          <div className='rect--image'></div>
        </div>

    		<Venturus ref="venturus" changeColour={ this.changeColour }/>
        <KITK ref="KITK" changeColour={ this.changeColour }/>
        <Biome ref="biome" changeColour={ this.changeColour }/>
        <Fwaste changeColour={ this.changeColour }/>
        <Invite changeColour={ this.changeColour }/>

    		<div className="social-icons l-column l-space-between">
        	<a href="#" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
        	<a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        	<a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
      	</div>

			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);