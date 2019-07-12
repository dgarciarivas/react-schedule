import React from 'react';
import PendienteInput from './PendienteInput.jsx';
import ListHeaderButton from './ListHeaderButton';



    const LosPendientes = (props) => {
            return(
                    <div className = "LosPendientes" 
                          style ={{
                            
                             display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                          }}>
                        <div className="ListHeader" 
                              style ={
                                    {
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flexWrap: 'nowrap',
                                        alignItems: 'center',
                                        flexGrow: '100%',  
                                    }
                                      }>
             
                             <div className="PendienteName" 
                                  style={{
                                      fontSize: 'xx-large',
                                  }}> 
                                  {
                                      props.name
                                  }
                             </div>

                            <ListHeaderButton id = {props.name} removeItem = {props.removeItem} index={props.index}/>
                      
                        </div>
                        <PendienteInput className = "PendienteInput" listName= {props.name} removeItem = {props.removeItem} index = {props.index} />
                    </div>
                )
        }

 
export default LosPendientes;

  