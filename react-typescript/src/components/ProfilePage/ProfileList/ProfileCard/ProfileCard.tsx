import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../features/Users";
import AddProfile from "../AddProfile/AddProfile";
import Api from "../../../../api/api";

export default function ProfileCard({...props}) {
  const dispatch = useDispatch();
  const [edit, isEdit] = useState(false);
  const { id, name, email, profilePic, phone } = props.user;

  console.log("profilecard ", props.user)

  return (
    <div>
      {edit === false ? (
        <div>
          <img style={{ width: 275, height: 200 }} src={profilePic} alt="Pic" />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <button type="button" onClick={()=> {isEdit(true)}}>Edit</button>
          <button
            onClick={ async () => {
              dispatch(deleteUser({ id: id }));
              await Api.delete(id);
            }}
            type="button"
          >
            Delete
          </button>
          <br />
          <br />
          <br />
        </div>
      ) : (
        <div>
        <AddProfile edit={edit} user={props.user} isEdit={isEdit}></AddProfile>
        <button type="button" onClick={()=>{isEdit(false)}}>Cancel</button>
        <br /><br /><br />
        </div>
      )}
    </div>
  );
}
