import { Chip } from "@mui/material";
import React from "react";
import './styles.css'

// const KanbanCard=()=> {
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {
// 	// 		collapsed: true,
// 	// 	};
// 	// }


// 		return (
// 			<div
// 				style={cardStyle}
// 				draggable={true}
// 				// onDragEnd={(e) => {this.props.onDragEnd(e, this.props.project);}}
// 				// onClick={popUp}
// 			>
// 				 {this.props.project.weight=='High' && <Chip label={this.props.project.weight}color="success"  className="chipcon"/>}
// 				 {this.props.project.weight=='Med' && <Chip label={this.props.project.weight} color="primary" className="chipcon1" />}
// 				 {this.props.project.weight=='Low' && <Chip label={this.props.project.weight} color="warning" className="chipcon2" />}
// 				<div className="card-contetnt"><h4>{this.props.project.activityName}</h4></div>
// 				<div>

// 				</div>
// 				{(this.state.collapsed)
// 					? null
// 					: (<div><strong>Description: </strong>{ this.props.project.description }<br/></div>)
// 				}
// 				<div
// 					style={{'width': '100%'}}
// 					onClick={(e) => {this.setState({collapsed: !this.state.collapsed});}}
// 				>
// 					{(this.state.collapsed) ? String.fromCharCode('9660') : String.fromCharCode('9650')}
// 				</div>
// 			</div>

// 		);

// 	}

// export default KanbanCard;

const KanbanCard = ({ activityName, weight, description }) => {
    const cardStyle = {
        'backgroundColor': '#fff',
        'paddingLeft': '20px',
        'paddingTop': '20px',
        'paddingBottom': '20px',
        'paddingRight': '20px',
        'marginLeft': '0px',
        'marginRight': '0px',
        'marginBottom': '0px',
        'marginTop': '20px',
        'borderRadius': '10px',
        'textAlign': 'left',
        'box-shadow': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 0px',
    };

    return (
        <>
            <div
                style={cardStyle}
            // draggable={true}
            // onDragEnd={(e) => {this.props.onDragEnd(e, this.props.project);}}
            // onClick={popUp}
            >
                {weight == 'High' && <Chip label={weight} color="success" className="chipcon" />}
                {weight == 'Med' && <Chip label={weight} color="primary" className="chipcon1" />}
                {weight == 'Low' && <Chip label={weight} color="warning" className="chipcon2" />}
                <div className="card-contetnt">
                    <h4>{activityName}</h4>
                </div>
                <div></div>

                <div>
                    <strong>Description: </strong>
                    {description}
                    <br />
                </div>

                {/* <div
                    style={{ width: '100%' }}
                    onClick={(e) => {
                        this.setState({ collapsed: !this.state.collapsed });
                    }}
                >
                    {this.state.collapsed ? String.fromCharCode('9660') : String.fromCharCode('9650')}
                </div> */}
            </div>
            {/* <h2>{activityName}</h2> */}
        </>
    );
};

export default KanbanCard;
