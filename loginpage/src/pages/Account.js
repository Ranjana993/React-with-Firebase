import React from 'react'
import { UserAuth } from '../context/authContext'
import { useNavigate } from "react-router-dom"

const Account = () => {
    const { user,Logout } = UserAuth()
    const Navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await Logout()
            Navigate('/login')

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Welcome to account page ,.....</h1>
            <h2>Hello {user?.displayName}</h2>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default Account