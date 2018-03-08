import React, {Component} from "react";
import ReactDOM from "react-dom";
import Karaktaer from "./karaktaer";
import Tv from "./tv";
require("./css/design.css");

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			visaKnapp : [],
			aktivBild : "",
			citat : []
		}
	}
	hover(namn){
		var arr = this.state.visaKnapp;
		arr.push(namn);
		this.setState({visaKnapp: arr});
	}
	citat(karaktaer){
		var bild = "";
		switch(karaktaer){
			case "homer":  bild = require('./bilder/homer-tv.png');
				break;
			case "milhouse": bild = require('./bilder/milhouse-tv.png');
			break;	
			case "burns" : bild = require('./bilder/burns-tv.png');
			break;	
			case "ralph" : bild = require('./bilder/ralph-tv.png');
			break;	
			case "bart" : bild = require('./bilder/bart-tv.png');
			break;	
		}
		this.setState({aktivBild: bild});

		var homerCitat = ["What's the point of going out? We're just gonna wind up back here anyway" , "it is pronounced nuclear", "I’ve learned that life is one crushing defeat after another until you just wish Flanders was dead" , "I believe that children are our future. Unless we stop them now" , "I’m like that guy who single-handedly built the rocket & flew to the moon. What was his name? Apollo Creed?" , "Kids, you tried your best and you failed miserably. The lesson is, never try"];
		var milhouseCitat = ["But my mom says im cool." , "I can’t go to juvie! They use guys like me as currency!" , "Remember the time he ate my goldfish? And you lied and said I never had goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?," , "Everything's coming up Milhouse!"  ]
		var burnsCitat = ["It was the best of times, it was the BLURST of times? You stupid monkey" , "Re-cy-cling?" , "Friends, Family, Religion. These are the three demons you must slay in order to succeed in business" , "We'll take the spruce moose!' 'Very good sir, but w- 'Get in the plane, Smithers' 'Sir I ca- 'Get. In" , "Are you saying boo or boo-urns?"];
		var ralphCitat = ["I'm bembarassed for you" , "i, Principal Skinner! Hi, Super Nintendo Chalmers" , "That's where I saw the Leprechaun. He tells me to burn things" , "Look Big Daddy, it's Regular Daddy" , "me fail english that's unpossible" , "This is my sandbox, I'm not allowed to go in the deep end "];
		var bartCitat = ["Well, if you're damned if you do, damned if you don't" , "I Didn't Do It" , "I only lied because it was the easiest way to get what i wanted" , "Oh my God, the dead have risen and they're voting Republican" , "No, he's pretty dumb. He's in all the same special classes I am" , "Dad, thanks to TV,' I can't remember what happened 8 minutes ago. No, really, it's a serious problem. Ha, ha, ha! What're we laughing about?" , "Remember, you can always find East by staring directly at the sun"];
	
		var aktivCitat = "";
			switch(karaktaer){
					case "homer":  aktivCitat = homerCitat[Math.floor(Math.random()*homerCitat.length)];
						break;
					case "milhouse": aktivCitat = milhouseCitat[Math.floor(Math.random()*milhouseCitat.length)];
						break;
					case "burns": aktivCitat = burnsCitat[Math.floor(Math.random()*burnsCitat.length)];
						break;
					case "ralph": aktivCitat = ralphCitat[Math.floor(Math.random()*ralphCitat.length)];
						break;
					case "bart": aktivCitat = bartCitat[Math.floor(Math.random()*bartCitat.length)];
						break;				
				}

				this.setState({citat : aktivCitat});
	}
	render(){

		return(
			<div id ="wrapper">
				<header>
				</header>	
				<div id="karaktaer-galleri">
					<ul>
						<Karaktaer namn="homer" bild= {require('./bilder/homer.png')} hover = {this.hover.bind(this)} visaKnapp = {this.state.visaKnapp} citat = {this.citat.bind(this)} />
						<Karaktaer namn="milhouse" bild= {require('./bilder/milhouse.png')} hover = {this.hover.bind(this)} visaKnapp = {this.state.visaKnapp} citat = {this.citat.bind(this)} />
						<Karaktaer namn="burns" bild=  {require('./bilder/burns.png')} hover = {this.hover.bind(this)} visaKnapp = {this.state.visaKnapp} citat = {this.citat.bind(this)} />
						<Karaktaer namn="ralph" bild=  {require('./bilder/ralph.jpg')} hover = {this.hover.bind(this)} visaKnapp = {this.state.visaKnapp} citat = {this.citat.bind(this)} />
						<Karaktaer namn="bart" bild=  {require('./bilder/bart.png')} hover = {this.hover.bind(this)} visaKnapp = {this.state.visaKnapp} citat = {this.citat.bind(this)} />
					</ul>
				</div>	
				<Tv aktivBild = {this.state.aktivBild} aktivCitat = {this.state.citat} />
		
			</div>	
		);
	}
}



ReactDOM.render(<App /> , document.getElementById("App"));