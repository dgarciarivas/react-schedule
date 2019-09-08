import React from 'react';

 const ClockDisplay = (props)=>{
    return(
     
          <div className="hours-indicator clock" id='hour' 
                style={{
                  //borderRadius: '50%',
                  border: '1px none #333',
                  height: '60px',
                  width: '60px',
                  backgroundColor: 'white',
                }}>
            <div className="min-indicator clock" id="minutes"
                   style={{
                      //borderRadius: '50%',
                      border: '1px none #333',
                      height: '40px',
                      width: '40px',
                      backgroundColor: 'white',
                    }}>
              <div className="sec-indicator clock" id ="seconds"
                       style={{
                          //borderRadius: '50%',
                          border: '1px none #333',
                          height: '20px',
                          width: '20px',
                          backgroundColor: 'white',
                        }}>
              
              </div>
            </div>

            
          </div>
      
      )
  }

  export default ClockDisplay