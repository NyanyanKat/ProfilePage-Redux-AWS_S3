import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import ReInputField from "./ReInputField/ReInputField";
import { addUser, editUser } from "../../../../features/Users";
import Api from "../../../../api/api";

interface User {
  id: string;
  profilePic: string;
  name: string;
  email: string;
  phone: string;
}

export default function AddProfile(props: any) {
  //const [data, setData] = useState<Array<User>>([]);
  const userList = useSelector((state:any) => state.users.value);

  const [data, setData] = useState({});

  //const [data, setData] = useState(User)
  const dispatch = useDispatch();

//   function getInput(value: any) {
//     setData({ ...data, value });
//   }

  //console.log("data ", data);

  return (
    <div>
          <h2>Add Profile</h2>
          <br />
          <ReInputField
            label="Profile Pic:  "
            type="file"
            name="profilePic"
            placeholder="Profile Pic"
            //valid={checkValid}
            //onChange={setData}
            getInput={(value:string) => {setData({...data, profilePic: value})}}
            value=''
          />
          <br />
          <ReInputField
            label="Name:  "
            type="text"
            name="name"
            placeholder="John Doe"
            //onChange={setData}
            getInput={(value:string) => {setData({...data, name: value})}}
            value={props.edit? props.user.name: ''}
          />
          <br />
          <ReInputField
            label="Email:  "
            type="text"
            name="email"
            placeholder="xxx@xxx.com"
            //onChange={setData}
            getInput={(value:string) => {setData({...data, email: value})}}
            value={props.edit? props.user.email: ''}
          />
          <br />
          <ReInputField
            label="Phone:  "
            type="text"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            getInput={(value:string) => {setData({...data, phone: value})}}
            value={props.edit? props.user.phone: ''}
          />
          <br />

          {props.edit !== true? 
          (
          <>
             <button
            onClick={ async () => {
              console.log("last user: ", userList[userList.length-1]);
              const id = userList.length+1;
              dispatch(addUser({ ...data, id:id}));
              await Api.add({ ...data, id:id});
            }}
          >
            Submit
          </button>
          </>
          ):(
            <>
            <button
           onClick={ async ()=> {
              dispatch(editUser({...data, id:props.user.id}));
              await Api.update(props.user.id, {...data})
              props.isEdit(false);
           }}
         >
           Submit Edit
         </button>
         </>

          )
        }
       
      
    </div>
  );
}
