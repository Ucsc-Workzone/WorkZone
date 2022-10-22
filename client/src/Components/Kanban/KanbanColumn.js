import KanbanCard from './KanbanCard';
import React from 'react';
import { Divider, Button } from '@mui/material';
import { IconPlus } from '@tabler/icons';
// import Button from '@mui/material';
class KanbanColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mouseIsHovering: false, addnewCard: false };
        this.changeState = this.changeState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state = { mouseIsHovering: false };
    }

    generateKanbanCards() {
        return this.props.projects.slice(0).map((project) => {
            return <KanbanCard project={project} key={project.name} weigh={project.weigh} onDragEnd={this.props.onDragEnd} />;
        });
    }
    addCard() {
        console.log('Malithi');

        return <KanbanCard project="New" key="new" onDragEnd={1} />;
    }

    changeState(e) {
        // this.setState({ testState:true });
        this.setState({ addnewCard: true });
		const studentId = window.location.href.split('/')[6]
        console.log(studentId);
    }
    render() {
        const columnStyle = {
            display: 'inline-block',
            verticalAlign: 'top',
            marginRight: '5px',
            marginBottom: '5px',
            paddingLeft: '10px',
            paddingTop: '0px',
            width: '32%',

            backgroundColor: this.state.mouseIsHovering ? '#d3d3d3' : '#f0eeee'
        };
        return (
            <div
                style={columnStyle}
                onDragEnter={(e) => {
                    this.setState({ mouseIsHovering: true });
                    this.props.onDragEnter(e, this.props.stage);
                }}
                onDragExit={(e) => {
                    this.setState({ mouseIsHovering: false });
                }}
            >
                <h4 className="card-contetnt">
                    {this.props.name} ({this.props.projects.length})
                </h4>

                {this.props.stage == 1 && <Divider textAlign="left" className="devide1"></Divider>}
                {this.props.stage == 2 && <Divider textAlign="left" className="devide2"></Divider>}
                {this.props.stage == 3 && <Divider textAlign="left" className="devide3"></Divider>}

                <br></br>
                {this.props.stage == 1 && (
                    <div className="divCon">
                        <div>{/* <h4 className="card-contetnt">{board[0].name}</h4> */}</div>

                        <div>
                            <Button className="buttonAdd" onClick={this.changeState}>
                                <IconPlus></IconPlus>Add Task
                            </Button>
                        </div>
                    </div>
                )}
                {this.state.addnewCard && <Button>Hello</Button>}
                {this.generateKanbanCards()}
                <br />
            </div>
        );
    }
}
export default KanbanColumn;
