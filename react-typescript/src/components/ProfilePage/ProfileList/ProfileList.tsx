import React , {useEffect} from 'react';
import ProfileCard from "../ProfileList/ProfileCard/ProfileCard";
import { useSelector, useDispatch} from 'react-redux';
import {clearUser, fetchAllUsers} from "../../../features/Users";
import { RootState, AppDispatch } from '../../..';

export default function ProfileList(props:any) {

    const userList = useSelector((state:any) => state.users.value);
    const dispatch = useDispatch<AppDispatch>();
    // function deleteAllProfile(e:any) {
    //     props.setData([]);
    // }
    useEffect(()=> {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    return (
        <div>

        <h2>Profile List</h2>
        <button type="button" onClick={() => {dispatch(clearUser(userList))}}>Clear</button>
        <br /><br/>
        {userList.map((user:any, index:number) => (
            <ProfileCard key={index} user={user}></ProfileCard>
        ))}

        </div>
    );



}