import { Button, Chip } from "@mui/material";
import React from "react";
import './styles.css'
import axios from "axios";

class KanbanCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}

	addworkreport(){
		console.log(event.target.value)
		const id=event.target.value

	axios
        .post('http://localhost:5000/api/project/addworkReport', {
           subacitivityId:id
           
        })
        .then((response) => {
            console.log(response.data);
			

        });
	}

	render() {
		const cardStyle = {
			'backgroundColor': '#fff',
			'paddingLeft': '0px',
			// 'border':'0.5px solid black',
			'paddingTop': '5px',
			'paddingBottom': '5px',
			'marginLeft': '0px',
			'marginRight': '5px',
			'marginBottom': '5px',
			'paddingLeft':'5px',
            'borderRadius':'10px',
			'textAlign':'left',
			'boxShadow': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 0px'
		};

		return (
			<div
				style={cardStyle}
				draggable={true}
				onDragEnd={(e) => {this.props.onDragEnd(e, this.props.project);}}
			>
				 {this.props.project.weight=='High' && <Chip label={this.props.project.weight}color="success"  className="chipcon"/>} 
				 {this.props.project.weight=='Med' && <Chip label={this.props.project.weight} color="primary" className="chipcon1" />} 
				 {this.props.project.weight=='Low' && <Chip label={this.props.project.weight} color="warning" className="chipcon2" />} 
				<div className="card-contetnt"><h4>{this.props.project.subActName}</h4></div>
				{this.props.project.project_stage==3 && <Button onClick={this.addworkreport} value={this.props.project.subActivityId}>Add to work report</Button>} 
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