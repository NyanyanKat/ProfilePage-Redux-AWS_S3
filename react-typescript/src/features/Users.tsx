import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../api/api";
//import { UsersData } from "../FakeData";

//const {loading, data} = FetchData('http://127.0.0.1:8000/api/profile');
// var arr:any[] = [];

// export const retrieveData = () => {
//         Api.getAll()
//         .then((data) => {
//             console.log('arr in promise ', arr);
//             arr = JSON.parse(JSON.stringify(data.data));
//             console.log("res ", data.data);
//             //console.log("arr ", arr)
// })
// };

// retrieveData();
//const UserData = retrieveData();
//console.log("UserData", UserData);

// console.log('arr', arr)
//const extraActions = createExtraActions();
//const initialState = createInitialState();
//const extraReducers = createExtraReducers();

// function createInitialState() {
//   return {
//     users: UsersData
//   };
// }

// function createExtraActions() {
//   return {
//     getAll: getAll(),
//   };

//   function getAll() {
//     return createAsyncThunk("/", async () => await Api.getAll());
//   }
// }

// function createExtraReducers() {
//   return {
//     ...getAll(),
//   };
//   function getAll() {
//     var { pending, fulfilled, rejected } = extraActions.getAll;
//     const fulFilled:any = fulfilled;

//     return {
//       [fulFilled]: (state: any, action: any) => {
//         state.users = action.payload;
//       },
//     };
//   }
// }

// Actions
// export const fetchUser = () => dispatch => {
//     axios.get('/profile')
//         .then(res => dispatch({
//             type: FETCH_USERS,
//             payload: res.data
//         }))
// }

export const fetchAllUsers = createAsyncThunk(
    '/',
    async () => {
        const res = await Api.getAll();
        return res.data;
    }

)

export const userSlice = createSlice({
  name: "users",
  initialState: {value: []},
  reducers: {
    addUser: (state: any, action: any) => {
      // Write code for adding user
      state.value.push(action.payload);
    },
    editUser: (state:any, action) => {
      state.value.map((user: any) => {
        if (user.id === action.payload.id) {
            for (const key of Object.keys(user)) {
              if (action.payload[key] !== undefined) {
                user[key] = action.payload[key];
              }
              // if (user[key] !== action.payload[key]) {
              //     user[key] = '2222'
              // }
            }
          // if (user.profilePic !== action.payload.profilePic) {
          //     user.profilePic = action.payload.profilePic;
          // }
          // if (
          //   user.name !== action.payload.name &&
          //   action.payload.name !== "" &&
          //   action.payload.name !== undefined
          // ) {
          //   user.name = action.payload.name;
          // } 
          // if (
          //   user.email !== action.payload.email &&
          //   action.payload.email !== "" &&
          //   action.payload.email !== undefined
          // ) {
          //   user.email = action.payload.email;
          // } 
          // if (
          //   user.phone !== action.payload.phone &&
          //   action.payload.phone !== "" &&
          //   action.payload.phone !== undefined
          // ) {
          //   user.phone = action.payload.phone;
          // }
        }
      });
    },
    deleteUser: (state:any, action) => {
      state.value = state.value.filter(
        (user: any, index: any) => user.id !== action.payload.id
      );
    },
    clearUser: (state:any, action) => {
      state.value = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.value = action.payload;
    })
  }
});

export const { deleteUser, addUser, clearUser, editUser } = userSlice.actions;
//export const actions = {...extraActions};
export default userSlice.reducer;
