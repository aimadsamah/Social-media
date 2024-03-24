import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo"><Link className="link" to="/">Aimedia</Link></span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link className="link" to="/"> <span className="topbarLink">Homepage</span></Link> 
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link className="link" to="/profile/aimad"> <img src="https://media.licdn.com/dms/image/D4D03AQHEB7pQfL6WbA/profile-displayphoto-shrink_800_800/0/1707494266254?e=1715817600&v=beta&t=ZMHqgXbOcdvdgV8uQinYPiBQaSo-V5EQL74h1c2pMB8" alt="" className="topbarImg"/> </Link>
      </div>
    </div>
  );
}