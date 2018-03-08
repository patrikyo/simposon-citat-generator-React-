import React,{Component} from "react";

class Karaktaer extends Component{
	render(){
		var knappStatus = "gom";
		var arr = this.props.visaKnapp;
		var namn = this.props.namn;
		arr.forEach(function(ele){
			if(namn.indexOf(ele) !== -1){
				knappStatus = "btn";
			}
		});
			
		return(
			<li namn= {this.props.namn}> 
				<img src={this.props.bild} onMouseOver={this.hover.bind(this)} />
				<button className={knappStatus} onClick = {this.genereraCitat.bind(this)}>Citat</button>
			</li>
		);
	}
	hover(){
		this.props.hover(this.props.namn);
	}
	genereraCitat(){
		this.props.citat(this.props.namn);
	}
}


export default Karaktaer;