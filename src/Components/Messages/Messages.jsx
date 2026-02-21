import React from 'react'

export default function Messages({ contact_selected }) {
    return (
        <div>
            {
                contact_selected.messages.map(message => { 
                    return (
                        <div key={message.id}>
                            {
                                message.send_by_me
                                    ? <h3 style={{color: 'green'}}>Enviado por mi</h3>
                                    : <h3 style={{color: 'blue'}}>Enviado por: {contact_selected.name}</h3>
                            }
                            <p>{message.text}</p>
                            <span>{message.time}</span>
                            <hr />
                        </div>
                    )
                })
            }   
        </div>
    )
}