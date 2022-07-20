import React, { useState, useEffect } from "react";
import "./ReInputField.css"


export default function ReInputField({ ...props }) {
  const [input, setInput] = useState(props.value);
  const [valid, setValid] = useState(false);

  async function handleChange(e: any) {
    e.preventDefault();
    const { name, value } = e.target;
    setInput(value);
    props.getInput(value);
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
            const checkphone = re3.test(e.target.vaue);
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
        <label htmlFor={props.name}>{props.label}</label>
        <input className={valid? 'green': 'red'}
          //id={input.name}
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
    </div>
  );
}
