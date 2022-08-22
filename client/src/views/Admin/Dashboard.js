import AllUser from 'Components/AllUsers';
import Calender from 'Components/Calender';
import RecentAnnoucements from 'Components/RecentAnnouncements';
import './styles/Home.css';
const Dashboard = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="leftConatiner">
                    <div className="cardConatiner"></div>
                    <div className="annouceContainer"></div>
                    <div className="feedBack">
                        <RecentAnnoucements />
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="calenConatiner">
                        <Calender />
                    </div>
                    <div>
                        <AllUser />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
