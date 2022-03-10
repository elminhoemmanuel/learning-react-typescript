import React, { useState } from 'react';

type AuthUser = {
    name: string,
    email: string
}

const LoggedIn = () => {

    const [user, setUser] = useState<AuthUser | null>(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () =>{
        setLoggedIn(true)
        setUser({
            name:"Omahlay",
            email:"Omahlay@gmail.com",
        })
    }
    const handleLogout = () =>{
        setLoggedIn(false)
        setUser(null)
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>

        <h4>This user is {loggedIn ? "logged in" : "logged out"}</h4>

        <h4>Username is {user?.name} and email is {user?.email}</h4>

    </div>
  );
};

export default LoggedIn;
