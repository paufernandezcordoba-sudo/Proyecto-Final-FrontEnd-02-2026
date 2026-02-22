import React, { useContext } from 'react'; 
import { useParams } from 'react-router';
import { ContactsContext } from "../../Components/Context/ContactsContext.jsx";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar.jsx";
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm.jsx';
import Messages from '../../Components/Messages/Messages.jsx';
import './ContactScreen.css';

export default function ContactScreen() {
  const { contactsState } = useContext(ContactsContext); 

  const { contact_id } = useParams();

  const contact_selected = contactsState?.find(contact => Number(contact.id) === Number(contact_id));

  return (
    <div className="app-container">
      {/* Lado Izquierdo: Sidebar */}
      <div className="sidebar-container">
        <ContactSidebar />
      </div>

      {/* Lado Derecho: Chat */}
      <div className="chat-container">
        
        {/* Si no hay contacto, mostramos el error centrado */}
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
                  src={contact_selected?.profile_picture || "https://i.pravatar.cc/150?img=11"}
                  alt="avatar"
                  className="avatar"
                />
                <div className="contact-texts">
                  <h2>{contact_selected.name}</h2>
                  <span>{contact_selected.last_time_connection || "Conectado recientemente"}</span>
                </div>
              </div>
              <button className="btn-salir">Salir</button>
            </header>

            {/* Área de mensajes con scroll independiente */}
            <main className="chat-messages-area">
              <Messages contact_selected={contact_selected} />
            </main>

            {/* Formulario de entrada al final */}
            <footer className="chat-input-area">
              <NewMessageForm contact_id={contact_id} />
            </footer>
          </>
        )}
      </div>
    </div>
  );
}