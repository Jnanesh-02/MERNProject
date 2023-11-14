import React from 'react';
import UserList from './UsersList';

function Users() {
    const USERS =[{
        id:"1",
        name:"John",
        image:"https://picsum.photos/seed/picsum/1600/800",
        places:3,

    }]
    return <UserList items={USERS} />;
    // return <h1>users works</h1>

}

export default Users;