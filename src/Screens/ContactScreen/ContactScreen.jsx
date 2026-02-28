import React, { useContext } from 'react';
import { ContactsContext } from '../../Components/Context/ContactsContext';
import { Link, useParams } from 'react-router-dom';
import { IoArrowBack, IoCheckmarkDone } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import Messages from '../../Components/Messages/Messages';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import './ContactScreen.css';

export default function ContactScreen() {
  const { contactsState } = useContext(ContactsContext);
  const { contact_id } = useParams();

  const contact_selected = contactsState?.find(contact => Number(contact.id) === Number(contact_id));

  return (
    /* clase 'chat-is-open' cuando hay un contacto */
    <div className={`chat-container ${contact_selected ? 'chat-is-open' : ''}`}>

      {!contact_selected ? (
        <div className="error-container">
          <h1>El contacto seleccionado no existe</h1>
        </div>
      ) : (
        <>

          <ChatHeader contact={contact_selected} />

          <main className="chat-messages-area">
            <Messages contact_selected={contact_selected} />
          </main>

          <footer className="chat-input-area">
            <NewMessageForm contact_id={contact_id} />
          </footer>
        </>
      )}
    </div>
  );
}