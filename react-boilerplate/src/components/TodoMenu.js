import React from 'react';

const TodoMenu = ()=>{
	return(
			<div id='TodoMenu'  style={{display: 'flex',
                                              flexDirection: 'column',
                                              backgroundColor: 'blue',
                                              color: 'orange', 
                                              visibility: 'hidden',          }} 
			onMouseLeave = {()=>{console.log('hovered off');  document.getElementById('TodoMenu').style.setProperty('visibility', 'hidden'); document.getElementById('todo-setting-text').removeAttribute('hidden');}}>		
      					
      					
      						<label onClick={(event)=>{ let element = event.target; let color = prompt("What color? This takes hex-values");  var count = Object.keys(JSON.parse(window.localStorage.storage)).length; console.log(count); for(let i = 0; i<count; i++){ document.getElementsByClassName('PendienteName')[i].style.setProperty('color', color);}}}>
      							list header
      						</label>
      				

      				
      					
      						<label onClick={(event)=>{ let element = event.target; let color = prompt("What color? This takes hex-values"); document.documentElement.style.setProperty('--minute-color', color);}}>
      							header
      						</label>
      				
      					
      						<label onClick={(event)=>{ let element = event.target; let color = prompt("What color? This takes hex-values"); document.documentElement.style.setProperty('--second-color', color);}}>
      							header
      						</label>
      			
      		</div>

		)
}					


export default TodoMenu;

