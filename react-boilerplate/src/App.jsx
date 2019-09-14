import React from 'react';
import ReactDOM from 'react-dom';
import Pendientes from './components/TodoThings/Pendientes.jsx';
import Clock from './components/ClockThings/Clock';
import SettingsBar from './components/SettingsThings/SettingsBar';
import CounterContainer from './components/CounterThings/CounterContainer';


const rootEl = document.getElementById('root');


    class App extends React.Component{
      constructor(){
        super();
          var height = screen.height;
          var width = screen.width;
          var px = 'px';
          
      }
            render(){
                    return(
                            <div id = "AppContainer"
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',

                                  }}>
                              
                              <div id="Pendiente-ClockContainer"
                                    style={{
                                             display: 'flex',
                                            flexDirection: 'row', 
                                            }}>
                                            
                                      <div id="PendientesContainer"
                                            style={{
                                              height: '600px',
                                              width: '1900px',
                                           

                                            }}>
                                                <Pendientes/>
                                      </div>


                                        <Clock />

                             
                                  </div>
                                  <CounterContainer />
                               </div>
                    );

            }
  }
    ReactDOM.render(<App />, rootEl);

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}