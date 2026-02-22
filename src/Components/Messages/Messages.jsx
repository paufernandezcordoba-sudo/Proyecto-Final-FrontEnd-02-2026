import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import './Messages.css'

export default function Messages({ contact_selected }) {
    return (
        <div className="messages-container">
            {
                contact_selected.messages.map(message => { 
                    // Definimos si el mensaje es mío o del contacto
                    const isMe = message.send_by_me;
                    return (
                        <div 
                            key={message.id} 
                            className={`message-row ${isMe ? 'mi-mensaje' : 'su-mensaje'}`}
                        >
                            <div className="message-bubble">
                                <p className="message-text">{message.text}</p>
                                <span className="message-time">
                                    {message.time}
                                    {isMe && <IoCheckmarkDone className="check-mark-icon" />}
                                </span>
                            </div>
                        </div>
                    )
                })
            }   
        </div>
    )
}