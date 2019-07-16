import React from 'react';
import ListItemButton from './ListItemButton';

 const List = (props) => {
            return (
                    <div className="ListItems" 
                            style={{
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: 'x-large'
                            }}>
                         <div  > 
                                <div>{
                                    props.name
                                }</div>
                        </div>
                        <ListItemButton name = {props.name} index = {props.index} removeItem = {props.removeItem} id = {'k4^'+props.name}/>
                </div>
            )
    }  

    export default List;