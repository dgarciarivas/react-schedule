import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';


class PendienteInput extends React.Component{
             constructor(){
                    super();
                    var storage = window.localStorage.storage;
                    console.log(storage, "this is the variable storage which should be everything stored locally, the call is window.localStorage.storage")
                    console.log('initializing pendiente list');
                    console.log(this);
                      this.state={
                        pendienteList: [],
                        newpendientetxt: undefined,
                     } 
                     
                    this.changeValue  = this.changeValue.bind(this);
                    this.onChangePen = this.onChangePen.bind(this);
                    this.removeItemPen = this.removeItemPen.bind(this);
                    this.onSubmitPen = this.onSubmitPen.bind(this);
                    this.handleOnSubmitPen = this.handleOnSubmitPen.bind(this);
                  
                  }             
                onChangePen = (event) =>{
                    this.setState({newpendientetxt: event.target.value});
                }

               onSubmitPen = (event)=>{
                event.preventDefault();
                console.log('PendienteInput.onSubmitPen start')
                console.log(this.props)
                if(this.state.newpendientetxt == undefined || this.state.newpendientetxt === ' ' || this.state.newpendientetxt === '' || this.state.newpendientetxt === null ){
                    alert("Please enter a value");

                }
                else{
                    var addition = this.state.newpendientetxt;
                    console.log('i want to add:',addition);
                    this.setState({
                        newpendientetxt: '',
                        pendienteList: [...this.state.pendienteList, addition]
                    });
                }
                let retrieve = JSON.parse(window.localStorage.getItem('storage'));
                console.log('I currently have:',retrieve[this.props.listName]);
                retrieve[this.props.listName] = [...retrieve[this.props.listName], addition];
                console.log('Need to save new list: ', retrieve);
                window.localStorage.setItem('storage', JSON.stringify(retrieve));
                console.log('PendienteInput.onSubmitPen end');

                }
              handleOnSubmitPen(list, copy){
              console.log('handleNewPendiente() start');
              if(copy.length > list.length) {
                    console.log('A pendiente was added named:');
                    //create a new list with initial values
                    var addition = copy[(copy.length -1)];
                    console.log(addition);
                    console.log('copy', copy)
                    window.localStorage.setItem(`${this.props.name}`, copy);  //it looks like saving a list name is working, need to be able to save the list
              }
              this.onSubmitPen(event);
              console.log('handleNewPende() end');
                 }
            removeItemPen = (index)=> { 
                  console.log("PendienteInput.removeItem start")
                  console.log('index of the item clicked on',index);
                  console.log('grab the stored values', JSON.parse(window.localStorage.storage));
                  let retrieve = JSON.parse(window.localStorage.storage);
                  console.log('I currently have:',retrieve[this.props.listName]);
                  let gone = retrieve[this.props.listName].splice(index, 1);
                  let newList  = retrieve[this.props.listName];
                  console.log('what was removed', gone);
                  console.log('Need to save new list: ', retrieve);
                  window.localStorage.setItem('storage', JSON.stringify(retrieve));
                  console.log("PendienteInput.removeItem end")
                  this.setState({pendienteList: []})
                }
            changeValue = (name, index, listName)=>{
              console.log('I clicked on '+name+' its index is '+ index+ ' in the list '+listName);
              let edit = prompt('What do you want to change this to?');
              if(edit === null || edit == '' || edit === undefined){
                edit = name;
              }
              console.log('Recieved new value for '+ name+'. Changed to '+edit);
              let retrieve = JSON.parse(window.localStorage.getItem("storage"));
              let retrieveList = retrieve[listName];
              retrieveList[index] = edit
              console.log(retrieve);
              window.localStorage.setItem('storage', JSON.stringify(retrieve)); //Edit master list is working but rerendering is not automatic yet
            }   
              render(){
                      return(
                        <div className = "PendienteInput" 
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                              }}>
                           
                            <form className = 'textinput' onSubmit={this.onSubmitPen}>
                                <input    
                                  style= {{
                                            textAlign: 'center',
                                             backgroundColor: '#521189',
                                              border: 'none',
                                              color: '#51D500',

                                        }}                               
                                    value={this.state.newpendientetxt} 
                                    placeholder={`Todo for ${this.props.listName}`}
                                    onChange={this.onChangePen}
                        
                                />
                            </form>
                           {JSON.parse(window.localStorage.getItem('storage'))[[this.props.listName]].map((d, i) => (<List listName = {this.props.listName}removeItem={this.removeItemPen}  changeValue = {this.changeValue} name={d} index={i}  />)) }
                          
                         </div>
                            );
                    }
  
    }
    export default PendienteInput;



