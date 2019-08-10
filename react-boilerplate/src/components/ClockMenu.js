import React from 'react';

const ClockMenu = () =>{
	return(
			<div id='ClockMenu'  style={{display: 'flex',
                                              flexDirection: 'column',
                                              backgroundColor: 'blue',
                                              color: 'orange', 
                                              visibility: 'hidden',          }} 
			onMouseLeave = {()=>{console.log('hovered off');  document.getElementById('ClockMenu').style.setProperty('visibility', 'hidden'); document.getElementById('clock-setting-text').removeAttribute('hidden');}}>		
      					
      					
      						<label onClick={(event)=>{ let element = event.target; let color = prompt("What color? This takes hex-values");  document.documentElement.style.setProperty('--hour-color', color);}}>
      							hour circle
      						</label>
      				

      				
      					
      						<label onClick={(event)=>{ let element = event.target; let color = prompt("What color? This takes hex-values"); document.documentElement.style.setProperty('--minute-color', color);}}>
      							minute circle
      						</label>
      				
      					
      						<label onClick={(event)=>{ let element = event.target; let color = prompt("What color? This takes hex-values"); document.documentElement.style.setProperty('--second-color', color);}}>
      							seconds circles
      						</label>
      			
      		</div>

		)
}				


export default ClockMenu;