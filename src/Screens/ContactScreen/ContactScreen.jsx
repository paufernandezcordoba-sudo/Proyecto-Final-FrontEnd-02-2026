import React, { useContext, useState, useRef, useEffect } from 'react';
import { ContactsContext } from '../../Components/Context/ContactsContext';
import { useParams } from 'react-router-dom';
import Messages from '../../Components/Messages/Messages';
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm';
import ChatHeader from '../../Components/ChatHeader/ChatHeader';
import { FaStar, FaArchive, FaBell, FaLock, FaClock, FaShieldAlt } from 'react-icons/fa';
import './ContactScreen.css';

const contactOptions = [
  { id: 1, icon: <FaStar />, label: 'Mensajes destacados' },
  { id: 2, icon: <FaArchive />, label: 'Mensajes conservados' },
  { id: 3, icon: <FaBell />, label: 'Silenciar notificaciones' },
  { id: 4, icon: <FaLock />, label: 'Cifrado' },
  { id: 5, icon: <FaClock />, label: 'Mensajes temporales' },
  { id: 6, icon: <FaShieldAlt />, label: 'Privacidad avanzada' },
];

export default function ContactScreen() {
  const { contactsState } = useContext(ContactsContext);
  const { contact_id } = useParams();

  const [showInfo, setShowInfo] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [contactsState, contact_id]);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
    setShowSearch(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowInfo(false);
  };

  const contact_selected = contactsState?.find(contact => Number(contact.id) === Number(contact_id));

  return (
    <div className={`chat-container ${contact_selected ? 'chat-is-open' : ''}`}>
      {!contact_selected ? (
        <div className="error-container">
          <h1>El contacto seleccionado no existe</h1>
        </div>
      ) : (
        <>
          <ChatHeader
            contact={contact_selected}
            onInfoClick={toggleInfo}
            onSearchClick={toggleSearch}
          />

          <div className="chat-body-wrapper" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
            <div className="chat-main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

              <main className="chat-messages-area" ref={messagesEndRef} style={{ flex: 1, overflowY: 'auto' }}>
                <Messages contact_selected={contact_selected} searchTerm={searchTerm} />
              </main>

              <footer className="chat-input-area">
                <NewMessageForm contact_id={contact_id} />
              </footer>
            </div>

            {(showInfo || showSearch) && (
              <div className="right-sidebar">
                {showInfo && (
                  <div className="info-panel">
                    <div className="header-panel">
                      <button className="close-search-btn" onClick={() => setShowInfo(false)}>✕</button>
                      <h3>Info. del contacto</h3>
                    </div>
                    <div className="body-panel" style={{ textAlign: 'center', marginTop: '20px' }}>
                      <img src={contact_selected.profile_picture} alt="Perfil" style={{ width: '150px', borderRadius: '50%' }} />
                      <h3>{contact_selected.name}</h3>
                      <p>{contact_selected.status}</p>
                      <p className="phone_number">{contact_selected.phone_number || 'Sin número registrado'}</p>
                      <div className="grey_line"></div>
                      <div className="options-container">
                        {contactOptions.map((opt) => (
                          <div key={opt.id} className="option-item">
                            <span className="option-icon">{opt.icon}</span>
                            <span className="option-label">{opt.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {showSearch && (
                  <div className="search-panel">
                    <div className="header-panel">
                      <button className="close-search-btn" onClick={() => setShowSearch(false)}>✕</button>
                      <h3>Buscar mensajes</h3>
                    </div>
                    <div className="body-panel">
                      <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <p className="right-panel-search">Buscar mensajes con {contact_selected.name}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}