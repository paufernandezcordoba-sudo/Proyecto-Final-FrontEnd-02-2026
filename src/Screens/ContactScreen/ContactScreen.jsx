import React, { useContext } from 'react';
import { useParams } from 'react-router'; 
import { ContactsContext } from "../../Components/Context/ContactsContext.jsx";
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm.jsx';
import Messages from '../../Components/Messages/Messages.jsx';
import './ContactScreen.css';
import { CiMenuKebab } from "react-icons/ci";

export default function ContactScreen() {
  const { contactsState } = useContext(ContactsContext);
  const { contact_id } = useParams();

  const contact_selected = contactsState?.find(contact => Number(contact.id) === Number(contact_id));

  return (
    <div className="chat-container">
      {!contact_selected ? (
        <div className="error-container">
          <h1>El contacto seleccionado no existe</h1>
        </div>
      ) : (
        <>
          {/* Cabecera del chat */}
          <header className="chat-header">
            <div className="contact-info">
              <img
                src={contact_selected?.profile_picture || "https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/171823996_1983580125153730_6122969410347502475_n.jpg?ccb=11-4&oh=01_Q5Aa3wFwbstMyhnViCfOcW4c0bBUUH0XVBdZOSpHbJWmQMB20Q&oe=69AA5326&_nc_sid=5e03e0&_nc_cat=111"}
                alt="avatar"
                className="avatar"
              />
              <div className="contact-texts">
                <h2>{contact_selected.name}</h2>
                <span>{contact_selected.last_time_connection || "Conectado recientemente"}</span>
              </div>
            </div>
            <button className="btn-salir"><CiMenuKebab /></button>
          </header>

          {/* Área de mensajes */}
          <main className="chat-messages-area">
            <Messages contact_selected={contact_selected} />
          </main>

          {/* Formulario de entrada */}
          <footer className="chat-input-area">
            <NewMessageForm contact_id={contact_id} />
          </footer>
        </>
      )}
    </div>
  );
}