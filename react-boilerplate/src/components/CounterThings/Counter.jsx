import React from 'react';


class Counter extends React.Component{
	constructor(){
		super();
		this.state={
				start: undefined, //this is when the count first started
				timeElapsed: 0, //this is the time elapsed before the counter was stopped
				end: undefined, //this is when the counter was stopped
				buttonText: 'start', 
				store: 0,
				stopped: true, // boolean that indicates state of the counter
				totalCount: 0, //total count of the counter
			}
		this.onClick = this.onClick.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.onClickR = this.onClickR.bind(this);
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
		handleOnClick(ON){
		if(ON){
 
			this.count = setInterval(()=>{
				let dif  = new Date() - this.state.start;
				this.setState({
					totalCount: dif + this.state.store,
				})
				console.log(dif);
			}, 10);
		}else{
			console.log('stopped', this.state.totalCount);
			this.setState({store: this.state.totalCount});
			clearInterval(this.count);
			
			
		}
	}
			
onClickR(){
	
	this.setState({totalCount: 0,
				buttonText: 'start',
				stopped: true,
				timeElapsed: 0,
				store: 0,
			})
	clearInterval(this.count);
}
  	

	render(){
		return(
			<div id = 'Counter' 
					style={{
						position: 'fixed',
						display: 'flex',

					}}> {this.state.totalCount}
					<button onClick={this.onClick}> {this.state.buttonText} </button>
					<button onClick = {this.onClickR}>clear</button>
			</div>


		);
	}

	}


export default Counter;