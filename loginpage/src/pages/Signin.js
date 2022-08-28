// import { async } from '@firebase/util'
import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import styled from 'styled-components'
import { UserAuth } from '../context/authContext'
import { useNavigate } from "react-router-dom"







const Signin = () => {

    const { googleSignin, user } = UserAuth()
    const Navigate = useNavigate()
    const HandleGoogleSignin = async () => {
        try {
            await googleSignin(
            )
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user !== null) {
            Navigate('/account')
        }
    }, [user])
    return (
        <SignInComponent>
            <h1>Signin</h1>
            <GoogleButton onClick={HandleGoogleSignin} />
            {/* <form action="">
                <label htmlFor="name">Email</label>
                <input type="email" name="email" id="" placeholder='email@gmail.com'/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='password' />
                <button type="submit" onClick={HandleGoogleSignin}> Signin</button>

            </form> */}
        </SignInComponent>
    )
}

export default Signin


const SignInComponent = styled.div`
    max-width: 100vw;
    height: 91.7vh;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    /* justify-content: center; */
    background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);
    align-items: center;
    margin: auto;
    

`