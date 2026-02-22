import React, { useContext } from 'react'
import { ContactsContext } from '../Context/ContactsContext'
import './NewMessageForm.css'

const NewMessageForm = ({ contact_id }) => {
    const { addMessage } = useContext(ContactsContext)

    function handleSubmitNewMessage(event) {
        event.preventDefault()

        const new_message = event.target.nuevo_mensaje.value
/* usamos el trim para quitar espacios al principio y al final del mensaje, asi evitamos enviar mensajes vacios o con solo espacios */
        if (new_message.trim() !== '') {
            addMessage(contact_id, new_message)
            event.target.nuevo_mensaje.value = ''
        }
    }

    return (
        <form onSubmit={handleSubmitNewMessage}>
            <label htmlFor='nuevo_mensaje'>Nuevo mensaje</label>
            <textarea 
                placeholder='Escribe un mensaje...' 
                id='nuevo_mensaje' 
                name='nuevo_mensaje'
                className="message-input" 
            />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default NewMessageForm