import React from 'react';

 const ClockDisplay = (props)=>{
    return(
     
          <div className="hours-indicator clock" id='hour' 
                style={{
                  borderRadius: '50%',
                  border: '1px solid #333',
                  height: '250px',
                  width: '250px',
                  backgroundColor: 'white',
                }}>
            <div className="min-indicator clock" id="minutes"
                   style={{
                      borderRadius: '50%',
                      border: '1px solid #333',
                      height: '200px',
                      width: '200px',
                      backgroundColor: 'white',
                    }}>
              <div className="sec-indicator clock" id ="seconds"
                       style={{
                          borderRadius: '50%',
                          border: '1px solid #333',
                          height: '150px',
                          width: '150px',
                          backgroundColor: 'white',
                        }}>
                <div className = "time-text" id='time-text' onClick={()=> {let del = confirm("Are you sure you want to clear all?"); if (del == true){let twice = confirm("Are you really sure you want to clear all?")}; if(del === true && twice === true){window.localStorage.clear(); location.reload();}}}>
                     <p className = 'clock-text' id="weekday" style={{lineHeight: '.1em',
                                                                         paddingTop: '10px'}}>{`${props.weekday}`}</p>
                      <p className = 'clock-text' id='date' style={{lineHeight: '.1em',
                                                                    padding: '2px'}}>   {`${props.month} / ${props.day} / ${props.year}`}</p>
                      <p className='clock-text'>{`${props.hour} : ${props.min} : ${props.sec}`}</p> 
                </div>
              </div>
            </div>
          </div>
      
      )
  }

  export default ClockDisplay