import React, { useState, useEffect } from "react";
//import AddProfile from "./AddProfile/AddProfile";
import ProfileList from "./ProfileList/ProfileList";
import AddProfile from "./ProfileList/AddProfile/AddProfile";
import "./ProfilePage.css";

export default function ProfilePage() {
  const [data, setData] = useState();

  //   function getData(value:any) {
  //     setData(value);
  //   }

  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <div className="userprofile">
        <div className="left_container">
          <AddProfile></AddProfile>
        </div>
        <br />
        <div className="right_container">
          <ProfileList></ProfileList>
        </div>
      </div>
    </div>
  );
}
