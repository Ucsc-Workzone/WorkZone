import "./rightbar.css";
import { Users } from "../dummydata/dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        {/* <img className="rightbarAd" src="assets/ad.png" alt="" /> */}
        {/* <h4 className="rightbarTitle">Online Friends</h4> */}
        {/* <ul className="rightbarFriendList"> */}
          {/* {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))} */}
        {/* </ul> */}
      </>
    );
  };

  const ProfileRightbar = () => {
      return (
          <>
        <div className="mainContainer">
        <div className="leftContainer">

            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">City:</span>
                <span className="rightbarInfoValue">Colombo</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Age</span>
                <span className="rightbarInfoValue">23</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Joined Date:</span>
                <span className="rightbarInfoValue">08.08.2022</span>
            </div>
            </div>
        </div>
            <div className="rightContainer">
            <h4 className="rightbarTitle">Profile</h4>
            </div>
        </div>
        
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}