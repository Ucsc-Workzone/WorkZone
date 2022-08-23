import Calender from 'Components/Calender';
import SiteAnnoucements from 'Components/SiteAnnoucements';
import './styles/Home.css';

const CoordinatorHome = () => {
    return (
        <>
            <div className="main-container">
                <div className="today-container"></div>
                <div className="right-container">
                    <div className="calender-container">
                        <Calender />
                    </div>
                    <div className="annouce-container">
                        <SiteAnnoucements />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoordinatorHome;
