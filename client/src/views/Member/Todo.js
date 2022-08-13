import App_todo from '../../App_todo';


const Todo = () => {
    return (
        <>
            <div className="main-container">
                <div className="today-container"></div>
                <div className="right-container">
                    <div className="calender-container">
                        <App_todo />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Todo;
