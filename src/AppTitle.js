import React from "react";

class AppButton extends React.Component {
  render() {
    return (
	<button 
style={{"color": this.props.color}}
onClick={()=>this.props.mohit("Called from AppButton->" + this.props.abc)} >Click me</button>
    );
  }
}

class AppTitle extends React.Component {
  render() {
    return (
      <tr>
        <td>
	<AppButton color={(this.props.user.id % 2 == 0) ? "red": "blue"} mohit={this.props.saksham} abc={this.props.name + "-->" + this.props.email} />
<br/>
	<button onClick={()=>this.props.saksham("Called from AppTitle")} >APpTitle bukhasbd</button>
<br/>
		 {this.props.name} 
	</td>
        <td>
		 {this.props.email} 
	</td>
      </tr>
    );
  }
}

export default AppTitle;
