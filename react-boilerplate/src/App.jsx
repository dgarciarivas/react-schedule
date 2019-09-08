import React from 'react';
import ReactDOM from 'react-dom';
import Pendientes from './components/TodoThings/Pendientes.jsx';
import Clock from './components/ClockThings/Clock';
import SettingsBar from './components/SettingsThings/SettingsBar';


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
                   
                             <div id="AppContainer"
                                    style={{
                                             display: 'flex',
                                            flexDirection: 'row',
                                   
                                          
                                           
                                            }}>
                                            <div id='spacer' style={{width: '100px', height:'100%'}}></div>
                                      <div id="PendientesContainer"
                                            style={{
                                              height: '680px',
                                              width: '1900px',
                                           

                                            }}>
                                                <Pendientes/>
                                      </div>


                                        <Clock />
                             

                               </div>
                    );

            }
  }
    ReactDOM.render(<App />, rootEl);

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}