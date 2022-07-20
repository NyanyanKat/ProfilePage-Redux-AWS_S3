import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import ProfilePage from './components/ProfilePage/ProfilePage';
import {addUser} from './features/Users';


function App() {
  //const userList = useSelector((state:any) => state.users.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <div className="addUser">
        <input type="text" placeholder='Name...' />
        <input type="text" placeholder='Email....'/>
        <input type="text" placeholder="Profile Pic" />
        <input type="text" placeholder='Phone Number' />
        <button onClick={()=> {dispatch(addUser)}}>Add User</button>
      </div> */}
      <div className='displayUsers'>
        {/* {userList.map((user:any, index:number) => {
          return (
            <div key={index}>
              <img style={{width:275, height:200}} src={user.profilePic} alt="pic" />
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <br />
            </div>
          
          )


        })} */}

        <ProfilePage></ProfilePage>
      </div>
    </div>
  );
}

export default App;
