import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import ReInputField from "./ReInputField/ReInputField";
import { addUser, editUser } from "../../../../features/Users";
import Api from "../../../../api/api";
import axios from "axios";

interface User {
  id: string;
  profilePic: string;
  name: string;
  email: string;
  phone: string;
}

export default function AddProfile(props: any) {
  //const [data, setData] = useState<Array<User>>([]);
  const userList = useSelector((state: any) => state.users.value);

  const [data, setData] = useState({});
  const [image, setImage] = useState(null);
  const inputRef: any = React.useRef();
  //const [data, setData] = useState(User)
  const dispatch = useDispatch();

  //   function getInput(value: any) {
  //     setData({ ...data, value });
  //   }

  //console.log("data ", data);
  const onSelectFile = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader: any = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const uploadFile = (e: any) => {
    var frm: any = document.querySelector("#file");
    let formData: any = new FormData();
    formData.append("profilePic", frm.files[0]);
    axios
      .post("http://127.0.0.1:8000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res ", res.data);
        setData({...data, profilePic: res.data})
      })
      .catch((err) => {
        console.error({ err });
      });
  };

  console.log("inputref ", inputRef);
  console.log("image ", image);
  return (
    <div>
      <h2>Add Profile</h2>
      <br />
      {/* <input
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={onSelectFile}
            //style={{display:'none'}}
        
          /> */}
        
      <form id="uploadForm" encType="multipart/form-data" onChange={uploadFile}>
        <label>Profile Pic: </label>
        <input type="file" id="file" name=""></input>
      </form>
      {/* <form action="http://localhost:8000/api/upload" method="POST" encType="multipart/form-data">
            <input type="file" name="profilePic" onChange={(e)=> console.log("This form: ", e.target.value)}/>
            <button>Submit</button>
          </form> */}
      <br />
      {/* <ReInputField
        label="Profile Pic:  "
        type="file"
        name="profilePic"
        placeholder="Profile Pic"
        //valid={checkValid}
        //onChange={setData}
        getInput={(value: string) => {
          setData({ ...data, profilePic: value });
        }}
      />
      <br /> */}
      <ReInputField
        label="Name:  "
        type="text"
        name="name"
        placeholder="John Doe"
        //onChange={setData}
        getInput={(value: string) => {
          setData({ ...data, name: value });
        }}
        value={props.edit ? props.user.name : ""}
      />
      <br />
      <ReInputField
        label="Email:  "
        type="text"
        name="email"
        placeholder="xxx@xxx.com"
        //onChange={setData}
        getInput={(value: string) => {
          setData({ ...data, email: value });
        }}
        value={props.edit ? props.user.email : ""}
      />
      <br />
      <ReInputField
        label="Phone:  "
        type="text"
        name="phone"
        placeholder="xxx-xxx-xxxx"
        getInput={(value: string) => {
          setData({ ...data, phone: value });
        }}
        value={props.edit ? props.user.phone : ""}
      />
      <br />

      {props.edit !== true ? (
        <>
          <button
            onClick={async () => {
              console.log("last user: ", userList[userList.length - 1]);
              const id = userList.length + 1;
              dispatch(addUser({ ...data, id: id }));
              await Api.add({ ...data, id: id });
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <>
          <button
            onClick={async () => {
              dispatch(editUser({ ...data, id: props.user.id }));
              await Api.update(props.user.id, { ...data });
              props.isEdit(false);
            }}
          >
            Submit Edit
          </button>
        </>
      )}
    </div>
  );
}
