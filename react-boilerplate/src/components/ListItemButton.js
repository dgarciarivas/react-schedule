import React from 'react'

const ListItemButton = (props)=>{
	
			return(		
							<div className = "ListItemButton" id={props.id}
                                  style={{color: 'gold', 
                                          height: '10px',  
                                          width: '10px', 
                                          border: '1px solid gold',
                                          borderRadius: '50%',
                                          fontSize: 'xx-small',
                                          margin: '10px',
                                          cursor: 'default',
                                          }} 
                                  onMouseOver={()=>{let element = document.getElementById(`${props.id}`); console.log(props); element.style.setProperty('color', 'red'); element.style.setProperty('border', '1px solid red');}}
                                  onMouseOut = {()=>{let element = document.getElementById(`${props.id}`); console.log(element); element.style.setProperty('color', 'gold'); element.style.setProperty('border', '1px solid gold');}}
                                  onClick={() => {props.removeItem(props.index); console.log('props when onclick is called',props)}}>

                                  X

                                  </div>
                      
                        		
				)

}

export default ListItemButton;


