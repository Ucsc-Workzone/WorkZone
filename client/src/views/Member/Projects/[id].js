import ProjectSummary from 'Components/ProjectSummary';
import TeamMember from 'Components/TeamMember';
import '../styles/Projects.css';
const Project = () => {
    return (
        <>
            <div className="main-conatiner">
                <div className="todo-conatiner">
                    <h2>To do</h2>
                </div>
                <div className="sub-conatiner">
                    <div className="project-summary">
                        <ProjectSummary />
                    </div>
                    <div className="member-summary">
                        
                        <TeamMember />
                    </div>
                    <div className="task-summary"></div>
                </div>
            </div>
        </>
    );
};

export default Project;
