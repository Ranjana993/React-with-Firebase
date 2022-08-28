import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import { UserAuth } from '../context/authContext'


const Navbar = () => {
    const { user, Logout } = UserAuth()


    const handleSignOut = async()=>{
        try {
            await Logout()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <NavContainer>
            <Links>
                <p>Firebase Google Auth & Account </p>
                {
                    user?.displayName ? <p onClick={handleSignOut}>SignOut</p>: 
                        <Link to="/signin">Sign in</Link>

                }
            </Links>
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.nav`
    height: 60px;
    color: white;
    font-weight: 600;
    background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);
`
const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    p ,a{
        font-size: 1.3rem;
        margin: 10px 2rem;
        color: white;
        text-decoration: none;
    }
    
`