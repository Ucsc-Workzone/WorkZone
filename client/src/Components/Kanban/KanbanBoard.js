import KanbanColumn from './KanbanColumn';
import React from "react";
import axios from 'axios';
class KanbanBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			isLoading: true,
			projects: [],
			draggedOverCol: 0,
			testState:false
		});
		this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
		this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
		this.changeState = this.changeState.bind(this);
	
		this.columns = [
			{name: 'Todo', stage: 1},
			{name: 'In Progress', stage: 2},
			{name: 'Done', stage: 3},
			
		];
		// axios
        // .post('http://localhost:5000/api/project/membergetCards', {
        //     center_id: 1,
        //     project_id:51,
		// 	activity_id:1
           
        // })
        // .then((response) => {
        //     console.log(response.data);
		// 	this.projectList=response.data;
        //     // setProjectList(response.data)
        //     // const projectid = response.data['LAST_INSERT_ID()'];
        //     // navigate('/coordinator/projectinit/' + `${projectid}`)


        // });
		const sendPutRequest = async () => {
			try {
				const resp = await axios.post('http://localhost:5000/api/project/membergetCards', {
					center_id: 1,
        project_id:54,
		activity_id:3
				});
				console.log(resp.data);
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};
		sendPutRequest();
		
		
	}

	componentDidMount() {
		const sendPutRequest = async () => {
			try {
				const resp = await axios.post('http://localhost:5000/api/project/membergetCards', {
					center_id: 1,
        project_id:54,
		activity_id:3
				});
				console.log(resp.data);
				this.setState({ projects: resp.data, isLoading: false });
			} catch (err) {
				// Handle Error Here
				console.error(err);
			}
		};
		sendPutRequest()
	
	
	}

	//this is called when a Kanban card is dragged over a column (called by column)
	handleOnDragEnter(e, stageValue) {
        
		this.setState({ draggedOverCol: stageValue });
	}

	//this is called when a Kanban card dropped over a column (called by card)
	handleOnDragEnd(e, project) {
   
		const updatedProjects = this.state.projects.slice(0);
		updatedProjects.find((projectObject) => {return projectObject.subActivityId === project.subActivityId;}).project_stage = this.state.draggedOverCol;
		this.setState({ projects: updatedProjects });
        console.log(updatedProjects)
		axios
        .post('http://localhost:5000/api/project/updateCards', {
           updatedProjects
           
        })
        .then((response) => {
            console.log(response.data);
			componentDidMount();
        

        });
	}

	changeState(e){
		// this.setState({ testState:true });
		this.setState({ testState:true });
		console.log("testState")
	}
	render() {
		if (this.state.isLoading) {
			return (<h3>Loading...</h3>);
		}

		return  (
      <div>
		{/* {this.state.testState && 
		<button> Hello world</button>

		} */}
		{/* <button onClick={this.changeState}>Hellooooo</button> */}
				{this.columns.map((column) => {
					return (
						<KanbanColumn
							name={ column.name }
							stage={ column.stage }
							weight={column.weigh}
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
