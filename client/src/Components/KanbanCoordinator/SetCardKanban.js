import { Chip } from "@mui/material";
import React from "react";
import './styles.css'

class KanbanCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}

	render() {
		const cardStyle = {
			'backgroundColor': '#fff',
			'paddingLeft': '0px',
			'paddingTop': '5px',
			'paddingBottom': '5px',
			'marginLeft': '0px',
			'marginRight': '5px',
			'marginBottom': '5px',
            'borderRadius':'10px',
			'textAlign':'left'
		};

		return (
			<div
				style={cardStyle}
				draggable={true}
				onDragEnd={(e) => {this.props.onDragEnd(e, this.props.project);}}
			>
				 {this.props.project.weigh=='High' && <Chip label={this.props.project.weigh}color="success"  className="chipcon"/>} 
				 {this.props.project.weigh=='Med' && <Chip label={this.props.project.weigh} color="primary" className="chipcon1" />} 
				 {this.props.project.weigh=='Low' && <Chip label={this.props.project.weigh} color="warning" className="chipcon2" />} 
				<div className="card-contetnt"><h4>{this.props.project.name}</h4></div>
				<div>
					<input placeholder="Set Date"></input>
					<input placeholder="Set Date"></input>
					<input placeholder="Set Date"></input>
				</div>
				{(this.state.collapsed)
					? null
					: (<div><strong>Description: </strong>{ this.props.project.description }<br/></div>)
				}
				<div
					style={{'width': '100%'}}
					onClick={(e) => {this.setState({collapsed: !this.state.collapsed});}}
				>
					{(this.state.collapsed) ? String.fromCharCode('9660') : String.fromCharCode('9650')}
				</div>
			</div>
		);
	}
}

export default KanbanCard;