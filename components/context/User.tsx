import React, { useContext } from 'react';
import { UserContext } from "./UserContext"

const User = () => {

    const userContext = useContext(UserContext)
    const handleLogin = () => {
            userContext.setUser({ 
                name:"Omale",
                email:"Omale@gmail.com",
            })
    }
    const handleLogout = () => {
            userContext.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <h2>User name is {userContext.user?.name} </h2>
            <h2>User email is {userContext.user?.email} </h2>
        </div>
    );
};

export default User;
