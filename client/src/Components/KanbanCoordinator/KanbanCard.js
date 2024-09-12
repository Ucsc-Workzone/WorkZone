import { Chip } from "@mui/material";
import React from "react";
import './styles.css'

import {Button} from "@mui/material";

const KanbanCard = ({ activityName, weight, description,date }) => {
    const deleteActivity=()=>{

    }
    const cardStyle = {
        'backgroundColor': '#fff',
        'paddingLeft': '30px',
        'paddingTop': '30px',
        'paddingBottom': '30px',
        'paddingRight': '30px',
        'marginLeft': '0px',
        'marginRight': '0px',
        'marginBottom': '0px',
        'marginTop': '20px',
        'borderRadius': '10px',
        'textAlign': 'left',
        'border':'1px solid #E8E8E8',
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
                <div>
                    <strong>Description: </strong>
                    {description}
                    <br />
                </div>
                <div className="dateContainer">
                    <div className="innerChip"><Chip label={'2022-11-12'} color="primary"  variant="outlined"/></div>
                    <div className="innerChip"><Chip label="Malithi Perera" color="primary" variant="outlined"/></div>
                

                   
                </div>
<div className="buttonDivMain">
<div className="buttonDiv1">

<Button variant="contained" className="buttonEdit">Edit</Button>
</div>   
<div className="buttonDiv2">

<Button variant="outlined" className="buttonEdit" color="error" onClick={deleteActivity}>Delete</Button>
</div>   

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
