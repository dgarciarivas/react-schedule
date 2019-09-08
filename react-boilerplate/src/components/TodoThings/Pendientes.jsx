import React from 'react';
import ReactDOM from 'react-dom';
import LosPendientes from './LosPendientes.jsx';

    class Pendientes extends React.Component{
        constructor(){
             super();
             var storage = window.localStorage.storage;
             console.log(storage, "this is the variable storage which should be everything stored locally, the call is window.localStorage.storage")
             if(window.localStorage.storage === undefined  || window.localStorage.storage === {}){
              let init = prompt('Welcome to pendientes! Start your pinche Pendientes:');
                console.log('initializing with', init);
                var storage = {

                  [init]: [] 
                  }
                window.localStorage.setItem('storage', JSON.stringify(storage));
                console.log('Stored local the initial list:', window.localStorage.storage)
                this.state={
                  titulotxt: undefined,
                  Lista: Object.keys(storage)
                 };
            }else{
            	 
                console.log('gathering list names');
                let storage = JSON.parse(window.localStorage.storage);
                console.log('finished gathering storage, list names are', Object.keys(storage));
                this.state={
                    titulotxt: undefined,
                    Lista: Object.keys(storage)
                }
              }
              this.onChange = this.onChange.bind(this);
              this.onSubmit = this.onSubmit.bind(this);
              this.removeItem = this.removeItem.bind(this);
              this.handleOnSubmit = this.handleOnSubmit.bind(this);
              
            
              
          }
         onChange = (event) =>{
                this.setState({titulotxt: event.target.value});
            }
          onSubmit = (event)=>{
                event.preventDefault();
                var currentList = this.state.Lista;
                if(this.state.Titulo == undefined && (this.state.titulotxt == undefined || this.state.titulotxt == '')){
                    alert("Please enter a value");
                }  
                else {
                    this.setState({
                        titulotxt: '',
                        Lista: [...this.state.Lista, this.state.titulotxt]
                    });  
                     const updatedList = [...this.state.Lista, this.state.titulotxt];
                    console.log('currentList',  currentList);
                    console.log('updatedList', updatedList);   
                    this.handleOnSubmit(updatedList); 
                    }
             }
            handleOnSubmit(updatedList){
              console.log('App.handleOnSubmit() start');
              console.log('length of list',updatedList.length);
              let index = updatedList.length;
              index--;
              var addition = updatedList[index];
              console.log('what i want to add:', addition)
              console.log('what is currently stored', window.localStorage.storage);
              let storage = JSON.parse(window.localStorage.storage);
              storage[addition] = [];
              console.log('new list to be stored', storage);
              window.localStorage.setItem('storage', JSON.stringify(storage));
              console.log('updated storage', window.localStorage.storage);
              console.log('App.handleStateEdit() end');
            } 
            removeItem = (index)=> {
                console.log('start of app.removeItem()')
                if (index === 0){
                    console.log(index, 'log the index passed in');
                    var list = this.state.Lista;
                    var gone = list.shift();
                    console.log(list, gone)
                    var newList = list;
                  }
                 
                else{
                   console.log(index, 'log the index passed in');
                    var list = this.state.Lista;
                    var gone = list.splice(index,1);
                    console.log(list, gone)
                    var newList = list;
                  }
                console.log(gone);
                console.log(newList);
                let retrieve = JSON.parse(window.localStorage.storage);
                let listNames = Object.keys(retrieve);
                console.log(listNames);
                console.log(retrieve);
                delete retrieve[gone];
                console.log('new list to be stored', retrieve);
                window.localStorage.setItem('storage', JSON.stringify(retrieve));
                console.log('updated storage', window.localStorage.storage);
                console.log('updating state for render')
                this.setState({Lista: Object.keys(JSON.parse(window.localStorage.getItem('storage')))})
                console.log('end of app.removeItem');
                  }

            render(){
                    return(
                             <div  className="Pendientes" 
                                    style={{
                                         display: 'flex',
                                        flexDirection: 'column',
                                          justifyContent: 'center',
                                          textAlign: 'center',
                                          maxHeight: '680px',
                                       
                                    
                                           }}>
                                
                                <form  onSubmit={this.onSubmit} style={{position: 'fixed', top: '20px', left:'600px'}}>
                                <h1>Todos?</h1>
                                    <input  
                                        style= {{
                                            textAlign: 'center',
                                             backgroundColor: '#521189',
                                              border: 'none',
                                              color: 'white',
                                  

                                        }}
                                        type = 'text'                                  
                                        value={this.state.titulotxt}                                       
                                        placeholder='Start here'
                                        onChange={this.onChange} 
                                       onSubmit={this.onSubmit} 
                                    />
                                </form>
                                <section className="LosPendientesContainer" 
                                      style={{
                                            display: 'flex',
                                         flexDirection: 'row',
                                         flexWrap: 'nowrap',
                                         justifyContent: 'space-evenly',
                                         position: 'absolute',
                                         top: '120px',
                                         left: '60px',
                                         maxWidth: '20000px',
                                        overflowX: 'scroll',


                                        }}>

                                    {
                                      Object.keys(JSON.parse(window.localStorage.getItem('storage'))).map((d, i) => (<LosPendientes removeItem={this.removeItem} id={d}  name={d} index={i} key={'k[-'+ i} />)) 
                                    }
                                </section>
                               </div>
                    );

            }
  }

   export default Pendientes