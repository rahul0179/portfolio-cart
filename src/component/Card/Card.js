import React from "react";
import "../Card/Card.css";
import img from "../../img/FB_IMG_1695231612968.jpg";
const Card = () => {
  return (
    <div className="card">
      <div className="imgBx">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            Rahul Barman <br />
            <span>Junior Web Developer</span>
          </h2>
          <div className="data">
            <h3>
              342 <br />
              <span>Posts</span>
            </h3>
            <h3>
              120k <br />
              <span>Followers</span>
            </h3>
            <h3>
              100 <br />
              <span>Following</span>
            </h3>
          </div>
          <div className="action-btn">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
