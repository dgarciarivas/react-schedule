import React from 'react';
import ClockMenu from './ClockMenu';
import TodoMenu from './TodoMenu';

const SettingsBar = ()=>{
	return(
	<div className = "Settings"
			style={{
               height: '50px',
              width: '100%',
              color: 'white',
              backgroundColor: 'black',
              display: 'flex',
              flexDirection: 'row',
             justifyContent: 'space-evenly',
              }}>
      		<div id = "clock-setting-text"
      			 onMouseEnter={()=>{console.log('hovered on'); document.getElementById('ClockMenu').style.setProperty('visibility', 'visible'); document.getElementById('clock-setting-text').setAttribute('hidden', true);}}
      			 //onMouseOut = {()=>{console.log('hovered off');  document.getElementById('ClockMenu').setAttribute('hidden', true); document.getElementById('clock-setting-text').removeAttribute('hidden');}}>
      				>
      						<p>clock  settings</p>
      				
      		</div>
      		<ClockMenu />
      		<div id = "todo-setting-text"
      			 onMouseEnter={()=>{console.log('hovered on'); document.getElementById('TodoMenu').style.setProperty('visibility', 'visible'); document.getElementById('todo-setting-text').setAttribute('hidden', true);}}
      			 //onMouseOut = {()=>{console.log('hovered off');  document.getElementById('ClockMenu').setAttribute('hidden', true); document.getElementById('clock-setting-text').removeAttribute('hidden');}}>
      				>
      				<p>todo settings</p>
      		</div>
      		<TodoMenu />
      </div>)

}

export default SettingsBar;


