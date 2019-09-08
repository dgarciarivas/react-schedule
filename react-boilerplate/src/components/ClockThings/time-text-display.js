<div className = 'time-text clock' id='time-text' 
                      onClick={ ()=> {
                                          let del = confirm("Are you sure you want to clear all?"); 
                                          if (del == true){var twice = confirm("Are you REALLY sure you want to clear all?"); 
                                                            if(del === true && twice === true){
                                                                                                window.localStorage.clear(); 
                                                                                                location.reload();
                                                                                                console.log('storage cleared')
                                                                                                }
                                                          }
                                      }}>


                 <p className = 'clock-text' id="weekday" style={{lineHeight: '.1em',
                                                                         paddingTop: '10px'}}>{`${props.weekday}`}</p>
                      <p className = 'clock-text' id='date' style={{lineHeight: '.1em',
                                                                    padding: '2px'}}>   {`${props.month} / ${props.day} / ${props.year}`}</p>
                      <p className='clock-text'> {`${props.hour} : ${props.min} : ${props.sec}`} </p> 

                        
                 
                </div>






                time text display