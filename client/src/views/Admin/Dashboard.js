import AllUser from 'Components/AllUsers';
import Calender from 'Components/Calender';
import RecentAnnoucements from 'Components/RecentAnnouncements';
import EarningCard from 'ui-component/cards/Skeleton/EarningCard';
import TotalOrderLineChartCard from 'views/dashboard/Default/TotalOrderLineChartCard';
import './styles/Home.css';
const Dashboard = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="leftConatiner">
                    <div className="cardConatiner">
                        <div className='subCard'>
                        <TotalOrderLineChartCard
                        title={'Registered User'}
                        count={20}
                        icon={''}
                        />
                        </div>
                        <div className='subCard'>
                        <TotalOrderLineChartCard
                        title={'Registered User '}
                        count={10}
                        icon={''}
                        />
                        </div>

                    </div>
                    <div className="annouceContainer">
                    <RecentAnnoucements />
                    </div>
                    <div className="feedBack">
                        
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
