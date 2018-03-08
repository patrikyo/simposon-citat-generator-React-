import React, {Component} from "react";

class Tv extends Component{

	render(){
		var status ="";
		if(this.props.aktivBild.length < 1){
			status = {display: "none"};
		}else{
			status = {display: "initial"};
		}
		return(
			<div className="tv">
				<img src={require("./bilder/tv.png")} />
				<p className="citat">{this.props.aktivCitat}</p>
				<img style={status} src = {this.props.aktivBild} className="karaktaer" alt="karaktär" />
			</div>
		);
	}
}

export default Tv;