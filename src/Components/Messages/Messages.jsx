import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import './Messages.css'

export default function Messages({ contact_selected }) {
    return (
        <div className="messages-container">
            {
                contact_selected.messages.map(message => { 
                    
                    const isMe = message.send_by_me;
                    
                    return (
                        <div
                            key={message.id}
                            className={`message-row ${isMe ? 'mi-mensaje' : 'su-mensaje'}`}
                        >
                            <div className="message-bubble">
                                <p className="message-text">{message.text}</p>
                                
                                <div className="message-info">
                                    <span className="message-time">{message.time || "3:45 PM"}</span>
                                    {isMe && <IoCheckmarkDone className="check-mark-icon" />}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}