import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("")

    const googleSignin = () => {
        const provider = new GoogleAuthProvider()
        // signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
    }

    const Logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("user", currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])


    return (
        <AuthContext.Provider value={{ googleSignin , Logout, user}} >{children}</AuthContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(AuthContext)
}