import React from 'react';


class Counter extends React.Component{
	constructor(){
		super();
		this.state={
				start: undefined,
				timeElapsed: 0,
				end: undefined,
				buttonText: 'start',
				stopped: true,
			}
		this.onClick = this.onClick.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		}
	handleOnClick(ON){
		if(ON){
 
			setTimeout(function(){
				let dif  = new Date() - this.state.start;
				this.setState({
					timeElapsed: dif/1000,
				})
				console.log(dif);
			}.bind(this), 1000);
		}else{
			console.log('stopped', this.state.timeElapsed);

			clearInterval();
		}
			
		
}
	onClick(){
		let on;
		const current = new Date();
		if(this.state.stopped){		
				this.setState({start: current,
						buttonText: 'stop',
						stopped: false,
						});			
				on = true;
		}else if(this.state.stopped === false){
			
				this.setState({
					end: current,
					buttonText: 'start',
					stopped: true,
				});
				on = false;
		}
		this.handleOnClick(on);
	}

  	

	render(){
		return(
			<div id = 'Counter' 
					style={{
						position: 'fixed',
						display: 'flex',

					}}> {this.state.timeElapsed}
					<button onClick={this.onClick}> {this.state.buttonText} </button>
			</div>


		);
	}

	}


export default Counter;