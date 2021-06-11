import React from "react";
import { Link } from "react-router-dom"

function ProfileItem(props) {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          {props.sno<9? <h2>{"0"+props.sno}</h2>:<h2>{props.sno}</h2> }
          <h3>{props.profile.name}</h3>
          <p>A/C: {props.profile.accountNo}</p>
          <p>Bal: ${props.profile.balance}</p>
          <Link to={`/profile/${props.profile.accountNo}`}>Account Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileItem;
