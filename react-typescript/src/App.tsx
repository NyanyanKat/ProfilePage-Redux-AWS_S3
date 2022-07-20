import React from 'react';
import './App.css';

//import { useSelector, useDispatch } from 'react-redux';
import ProfilePage from './components/ProfilePage/ProfilePage';
//import {addUser} from './features/Users';


function App() {
  //const userList = useSelector((state:any) => state.users.value);
  //const dispatch = useDispatch();

  return (
    <div className="App">
      <div className='displayUsers'>
        <ProfilePage></ProfilePage>
      </div>
    </div>
  );
}

export default App;
