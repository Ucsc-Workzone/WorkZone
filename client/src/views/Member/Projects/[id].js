import App_todo from 'App_todo';
import KanbanBorad from 'Components/Kanban/Index';
import ProjectSummary from 'Components/ProjectSummary';
import TaskSummary from 'Components/TaskSummary';
import TeamMember from 'Components/TeamMember';
import '../styles/Projects.css';
const Project = () => {
    return (
        <>
            <div className="mainConmain">
                <div className="project-summary">
                    <ProjectSummary />
                </div>
                <div className="main-conatiner">
                    <div className="todo-conatiner">
                        <KanbanBorad />
                    </div>
                    <div className="sub-conatiner">
                    {/* <div className="task-summary">
                        <TaskSummary />
                    </div> */}
                        {/* <div className="member-summary">
                            <TeamMember />
                        </div> */}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
