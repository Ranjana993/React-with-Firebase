import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from "../firebase"


const style = {
    form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`
}

const SendMsg = ({scroll}) => {
    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()
        if (input === "") {
            alert("Plz Enter something before submitting...")
        } else {
            const { uid, displayName } = auth.currentUser
            await addDoc(collection(db, 'message'), {
                text: input,
                name: displayName,
                uid,
                timestamp: serverTimestamp()
            })
            setInput("")
            scroll.current.scrollIntoView({behavior:"smooth"})
        }

    }

    return (
        <form onSubmit={sendMessage} className={style.form}>
            <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder='Message' />
            <button className={style.button} type="submit"> Send</button>
        </form>
    )
}

export default SendMsg