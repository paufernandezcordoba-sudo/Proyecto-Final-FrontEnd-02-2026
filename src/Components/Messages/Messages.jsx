import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
import './Messages.css'

export default function Messages({ contact_selected, searchTerm }) {
    const filteredMessages = contact_selected.messages.filter(msg =>
        msg.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="messages-container">
            {
                filteredMessages.map(message => {

                    const isMe = message.send_by_me;

                    return (
                        <div
                            key={message.id}
                            className={`message-row ${isMe ? 'mi-mensaje' : 'su-mensaje'}`}
                        >
                            <div className="message-bubble">
                                <p className="message-text">{message.text}</p>

                                <div className="message-info">
                                    <span className="message-time">
                                        {message.time || message.hour}
                                    </span>
                                    {<IoCheckmarkDone
                                        className="check-mark-icon"
                                        style={{ color: message.is_read ? '#53bdeb' : '#8696a0' }}
                                    />}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}