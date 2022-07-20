import React, { useState, useEffect } from "react";
import "./ReInputField.css"
import Api from "../../../../../api/api";
import axios from "axios";

export default function ReInputField({ ...props }) {
  const [input, setInput] = useState(props.value);
  const [valid, setValid] = useState(false);

  async function handleChange(e: any) {
    e.preventDefault();
    if (props.type === 'file') {
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
        })
        .catch((err) => {
          console.error({ err });
        });
    }
    else {
      const { name, value } = e.target;
      setInput(value);
      props.getInput(value);
    }
  }


function checkValid(e:any) {
    switch(props.name) {
        case 'name':
            const re = /^[a-zA-Z]+$/;
            const checkname = re.test(String(e.target.value));
            setValid(checkname);
            break;
        case 'email':
            const re2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
            const checkemail = re2.test(String(e.target.value).toLowerCase());
            setValid(checkemail);
            //console.log("check ", checkemail);
            break;
        case 'phone':
            const re3 = /^\d{3}-\d{3}-\d{4}$/;
            const checkphone = re3.test(e.target.value);
            //console.log('checkphone', checkphone)
            setValid(checkphone);
            break;
        default:
            break;
    }
}

  //console.log(input);

  return (
    <div>
      {props.type !== 'file'? (
        <>
        <label htmlFor={props.name}>{props.label}</label>
        <input className={valid? 'green': 'red'}
          id={props.type}
          type={props.type}
          name={props.name}
          onChange={(e) => {
            handleChange(e);
            checkValid(e);
          }
        }
          placeholder={props.placeholder ? props.placeholder : ""}
          value={input}
          //defaultValue={props.value !== undefined ? props.value: ''}
        />
      </>
      ): (
        <form id="uploadForm" encType="multipart/form-data" onChange={handleChange}>
          <input type="file" id="file" name=""></input>
      </form>
      )

      }
    </div>
  );
}
