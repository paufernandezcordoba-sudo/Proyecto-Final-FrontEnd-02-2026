import React, { useContext } from 'react'
import { ContactsContext } from '../Context/ContactsContext'
import { IoSend } from "react-icons/io5"; // Opcional: si quieres usar un icono de react-icons
import './NewMessageForm.css'

const NewMessageForm = ({ contact_id }) => {
    const { addMessage } = useContext(ContactsContext)

    function handleSubmitNewMessage(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const new_message = data.get('nuevo_mensaje');
        
        if (new_message && new_message.trim() !== '') {
            addMessage(contact_id, new_message);
            event.target.nuevo_mensaje.value = '';
        }
    }

    return (
        <form className="message-form" onSubmit={handleSubmitNewMessage}>
            <div className="input-container">
                <textarea 
                    placeholder='Escribe un mensaje...' 
                    id='nuevo_mensaje' 
                    name='nuevo_mensaje'
                    className="message-input"
                    rows="1" // Importante para que no sea muy alto al inicio
                />
            </div>
            
            <button type='submit' className="send-button">
                <IoSend /> 
            </button>
        </form>
    )
}

export default NewMessageForm