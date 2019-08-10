import React from 'react';
import ReactDOM from 'react-dom';
import Pendientes from './components/Pendientes.jsx';
import Clock from './components/Clock';
import SettingsBar from './components/SettingsBar';


const rootEl = document.getElementById('root');


    class App extends React.Component{
            render(){
                    return(
                   
                             <div className="App" 
                                    style={{
                                             display: 'flex',
                                            flexDirection: 'column',
                                            
                                           
                                            }}>
                                   <SettingsBar />
                                    <Clock />
                                    <Pendientes/>
                               </div>
                    );

            }
  }
    ReactDOM.render(<App />, rootEl);

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}