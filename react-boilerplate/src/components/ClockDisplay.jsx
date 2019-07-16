import React from 'react';

 const ClockDisplay = (props)=>{
    return(
     
          <div className="hours-indicator clock" id='hour' >
            <div className="min-indicator clock" id="minutes">
              <div className="sec-indicator clock" id ="seconds">
                <div className = "time-text" id='time-text'>
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