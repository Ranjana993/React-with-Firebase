import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState, useEffect, useRef } from 'react'
import { db } from '../firebase'
import ChatMsg from './ChatMsg'
import SendMsg from './SendMsg'




const style = {
    main: `flex flex-col p-[10] relative`
}
const Chat = () => {
    const [messages, setMessage] = useState([])
    const scroll = useRef()

    useEffect(() => {
        const q = query(collection(db, 'message'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnap) => {
            let messages = []
            querySnap.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessage(messages)
        })
        return () => unsubscribe()
    }, [])

    return (
        <>
            <main className={style.main}>
                {
                    messages && messages.map((message) => (
                        <ChatMsg key={message.id} message={message} />
                    ))
                }
            </main>
            <SendMsg scroll={scroll} />
            <span ref={scroll}></span>
        </>
    )
}

export default Chat