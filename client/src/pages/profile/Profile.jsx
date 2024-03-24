import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src="https://media.licdn.com/dms/image/D4D03AQHEB7pQfL6WbA/profile-displayphoto-shrink_800_800/0/1707494266254?e=1715817600&v=beta&t=ZMHqgXbOcdvdgV8uQinYPiBQaSo-V5EQL74h1c2pMB8"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Aimad Samah</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}