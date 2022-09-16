import KanbanCard from './KanbanCard'
import React from "react";
class KanbanColumn extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({ mouseIsHovering: false });
	}

	componentWillReceiveProps(nextProps) {
		this.state = ({ mouseIsHovering: false });
	}

	generateKanbanCards() {
		return this.props.projects.slice(0).map((project) => {
			return (
				<KanbanCard
					project={project}
					key={project.name}
					onDragEnd={this.props.onDragEnd}
				/>
			);
		});
	}
    addCard(){
        console.log("Malithi")
       
        return (
            <KanbanCard
                project="New"
                key="new"
                onDragEnd={1}
            />
        );
    }
	render() {
		const columnStyle = {
			'display': 'inline-block',
			'verticalAlign': 'top',
			'marginRight': '5px',
			'marginBottom': '5px',
			'paddingLeft': '10px',
			'paddingTop': '0px',
			'width': '32%',
			'textAlign': 'center',
			'backgroundColor': (this.state.mouseIsHovering) ? '#d3d3d3' : '#f0eeee',
		};
		return  (
      <div
				style={columnStyle}
				onDragEnter={(e) => {this.setState({ mouseIsHovering: true }); this.props.onDragEnter(e, this.props.stage);}}
				onDragExit={(e) => {this.setState({ mouseIsHovering: false });}}
			>
				<h4>{this.props.stage}. {this.props.name} ({this.props.projects.length})</h4>
				{this.generateKanbanCards()}
				<br/>
                {(this.props.stage)==1 && <button onClick={this.addCard}>Add Cards</button> }
                <KanbanCard
                project="New"
                key="new"
                onDragEnd={1}
            />
                
      </div>);
	}
}
export default KanbanColumn;