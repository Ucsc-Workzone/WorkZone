import KanbanColumn from './KanbanColumn';
import React from "react";
class KanbanBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			isLoading: true,
			projects: [],
			draggedOverCol: 0,
		});
		this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
		this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
		this.columns = [
			{name: 'Todo', stage: 1},
			{name: 'In Progress', stage: 2},
			{name: 'Done', stage: 3},
			
		];
	}

	componentDidMount() {
		this.setState({ projects: projectList, isLoading: false });
	}

	//this is called when a Kanban card is dragged over a column (called by column)
	handleOnDragEnter(e, stageValue) {
        
		this.setState({ draggedOverCol: stageValue });
	}

	//this is called when a Kanban card dropped over a column (called by card)
	handleOnDragEnd(e, project) {
      
		const updatedProjects = this.state.projects.slice(0);
		updatedProjects.find((projectObject) => {return projectObject.name === project.name;}).project_stage = this.state.draggedOverCol;
		this.setState({ projects: updatedProjects });
        console.log(updatedProjects)
	}

	render() {
		if (this.state.isLoading) {
			return (<h3>Loading...</h3>);
		}

		return  (
      <div>
				{this.columns.map((column) => {
					return (
						<KanbanColumn
							name={ column.name }
							stage={ column.stage }
							projects={ this.state.projects.filter((project) => {return parseInt(project.project_stage, 10) === column.stage;}) }
							onDragEnter={ this.handleOnDragEnter }
							onDragEnd={ this.handleOnDragEnd }
							key={ column.stage }
						/>
					);
				})}
      </div>
		);
	}
}
export default KanbanBoard;
let projectList = [
    {
      name: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 1
    },
    {
      name: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 1
    },
    {
      name: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 1
    },
    {
      name: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 2
    },
    {
      name: 'Project 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 3
    },
    {
      name: 'Project 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 3
    },
    {
      name: 'Project 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
      project_stage: 4
    },
  ];