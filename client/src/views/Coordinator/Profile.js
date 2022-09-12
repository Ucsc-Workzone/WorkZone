import "./styles/Profile.css";
import userimg from './../../assets/images/Profile/member2.jpg';
import cvrimg from './../../assets/profile/1.jpeg'; 
import Rightbar from "./../../Components/rightbar/Rightbar";
const CoordinatorProfile = () => {
    return (
        <>
<>
      
      <div className="profile">
        <div className="profileRight">
     <div className="profileRightTop">
                  <div className="profileCover">
                    <img
                      className="profileCoverImg"
                      src={cvrimg}
                      alt=""
                    />
                    <img
                      className="profileUserImg"
                      src={userimg}
                      alt=""
                    />
                  </div>
                  <div className="profileInfo">
                      <h4 className="profileInfoName">Pamodha Mahagamage</h4>
                      <span className="profileInfoDesc">Time is Every Thing</span>
                  </div>
                </div>
          <div className="profileRightBottom">
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>        </>
    );
};

export default CoordinatorProfile;
