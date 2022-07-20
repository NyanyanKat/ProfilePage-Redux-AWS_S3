"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userInfoSchema = new mongoose_1.Schema({
    id: {
        type: Number
    },
    profilePic: {
        type: String,
        default: null
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});
const UserInfo = (0, mongoose_1.model)('UserInfo', userInfoSchema);
UserInfo.create({
    id: 1,
    profilePic: 'https://static3.depositphotos.com/1005412/218/i/950/depositphotos_2186038-stock-photo-kitten-lays-isolated.jpg',
    name: 'Jimmy',
    email: 'jimmy@gmail.com',
    phone: '123-456-7890'
}).then(() => {
    console.log('Successfully created user Jimmy');
}).catch(() => {
    console.log('Failed to create user Jimmy');
});
UserInfo.create({
    id: 2,
    profilePic: 'https://st3.depositphotos.com/1177973/13325/i/1600/depositphotos_133251802-stock-photo-cute-cat-on-couch.jpg',
    name: 'Timmy',
    email: 'timmy@gmail.com',
    phone: '222-222-2222'
}).then(() => {
    console.log('Successfully created user Timmy');
}).catch(() => {
    console.log('Failed to create user Timmy');
});
UserInfo.create({
    id: 3,
    profilePic: 'https://st4.depositphotos.com/4312829/25214/i/1600/depositphotos_252145156-stock-photo-cute-cat-looking-with-green.jpg',
    name: 'Yummy',
    email: 'yummy@gmail.com',
    phone: '333-333-3333'
}).then(() => {
    console.log('Successfully created user Yummy');
}).catch(() => {
    console.log('Failed to create user Yummy');
});
UserInfo.create({
    id: 4,
    profilePic: 'https://st.depositphotos.com/1781316/2592/i/950/depositphotos_25921231-stock-photo-cat-on-couch.jpg',
    name: 'Honey',
    email: 'honey@gmail.com',
    phone: '444-444-4444'
}).then(() => {
    console.log('Successfully created user Honey');
}).catch(() => {
    console.log('Failed to create user Honey');
});
UserInfo.create({
    id: 5,
    profilePic: 'https://st2.depositphotos.com/1000877/5947/i/950/depositphotos_59478951-stock-photo-red-kitten.jpg',
    name: 'Homey',
    email: 'homey@gmail.com',
    phone: '555-555-5555'
}).then(() => {
    console.log('Successfully created user Homey');
}).catch(() => {
    console.log('Failed to create user Homey');
});
exports.default = UserInfo;
