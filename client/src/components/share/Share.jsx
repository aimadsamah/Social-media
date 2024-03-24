import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="https://media.licdn.com/dms/image/D4D03AQHEB7pQfL6WbA/profile-displayphoto-shrink_800_800/0/1707494266254?e=1715817600&v=beta&t=ZMHqgXbOcdvdgV8uQinYPiBQaSo-V5EQL74h1c2pMB8" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}