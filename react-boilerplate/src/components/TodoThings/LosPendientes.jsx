import React from 'react';
import PendienteInput from './PendienteInput.jsx';
import ListHeaderButton from './ListHeaderButton';



    const LosPendientes = (props) => {
            return(
                    <div className = "LosPendientes" 
                         draggable="true" 
                          style ={{
                            
                             display: 'flex',
                             margin: '20px',
                             padding: '10px',
                            flexDirection: 'column',
                            alignItems: 'center',

                            borderStyle: 'dashed',
                            borderRadius: '10%',
                            borderColor: 'gold',
                            position: 'relative',
                            //height: '500px',
                            width: '350px',
                            maxWidth: '700px',
                             maxHeight: '300px',
             


                          }}>
                        <div className="ListHeaderContainer" 
                              style ={
                                    {
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        flexWrap: 'nowrap',
                                        alignItems: 'center',

                            
                                    }
                                      }>
             
                          <div className="PendienteName" 
                                  style={{
                                      fontSize: 'x-large',
                                      
                                  }}> 
                                  {
                                      '#'+(props.index+1)+'. '+props.name
                                  }
                            </div>

                            <ListHeaderButton id = {props.name} removeItem = {props.removeItem} index={props.index}/>
                      
                        </div>
                        <PendienteInput className = "PendienteInput" listName= {props.name} removeItem = {props.removeItem} index = {props.index} />
                    </div>
                )
        }

 
export default LosPendientes;

  