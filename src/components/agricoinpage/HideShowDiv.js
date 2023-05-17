import React, { Component } from 'react' 
import SoxyPayTab from '../agricoinpage/SoxyPayTab';

class HideShowDiv extends Component {  
    constructor( props ){
        super( props )
        this.state = {show : false};
        this.showHide = this.showHide.bind(this)
    }
    render() {
        return (    
            <section id="content">
                <div className="container">
                    <div>
                        <div>
                            <button onClick={this.showHide} className="button-primary btn">{this.changeName()}</button>
                            { this.state.show && 
                                <div>
                                    <SoxyPayTab/>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
      );  
    }
    changeName(){
        let text = "Plan "
        text += this.state.show === true ? "hide" : "show";
        return text;
    }
    showHide(){
        const { show } = this.state;
        this.setState( { show : !show})
    }
}
   
   
export default HideShowDiv