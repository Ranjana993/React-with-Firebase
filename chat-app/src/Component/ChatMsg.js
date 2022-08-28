import React from 'react'
import { auth } from '../firebase'



const style = {
    msg: `flex items-center shadow-xl m-4 py-2 rounded-tl-full rounded-tr-full `,
    name: `absolute fixed mt-[-4rem] text-gray-600 text-xs`,
    sent: `bg-[#395dff] p-4 mx-4 text-white flex-row-reverse text-end float-right rounded-bl-full`,
    receive: `bg-[#e5e5ea] text-black float-left rounded-bl-full p-4`
}

const ChatMsg = ({ message }) => {
    const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}`:`${style.receive}`
    return (
        <div>
            <div className={`${style.msg} ${messageClass}`}>
                <p className={style.name}>{message.name} </p>
                <p>{message.text} </p>
            </div>
        </div>
    )
}

export default ChatMsg