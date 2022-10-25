import { Chip } from "@mui/material";
import React from "react";
import './styles.css'

import {Button} from "@mui/material";

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
                <div className="dateContainer">
                    <div className="innerChip"><Chip label="2022-10-26" color="primary"  variant="outlined"/></div>
                    <div className="innerChip"><Chip label="Malithi Perera" color="primary" variant="outlined"/></div>
                

                   
                </div>

                <div>
                    <strong>Description: </strong>
                    {description}
                    <br />
                </div>
<Button variant="contained">edit</Button>
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
