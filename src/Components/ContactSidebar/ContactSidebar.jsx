import React, { useContext, useState } from 'react' 
import { Link } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import './ContactSidebar.css'
import { RiChatNewLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";


export default function ContactSidebar() {

    const { contactsState } = useContext(ContactsContext) 
    const [searchQuery, setSearchQuery] = useState('');


    const filteredContacts = contactsState.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="sidebar-content">
            <header className="sidebar-header">
                <div className="header-top-row">
                    <h1 className="whatsapp-title">WhatsApp</h1>
                    <div className="header-icons">
                        <span className="icon"><RiChatNewLine /></span>
                        <span className="icon"><CiMenuKebab /></span>
                    </div>
                </div>

                <div className="search-container">
                    <div className="search-input-wrapper">
                        <span className="search-icon"><IoIosSearch /></span>
                        <input 
                            type="text" 
                            placeholder="Buscar un chat o iniciar uno nuevo"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="filters-container">
                    <button className="filter-pill active">Todos</button>
                    <button className="filter-pill">No leídos</button>
                    <button className="filter-pill">Favoritos</button>
                </div>
            </header>

            <div className="contacts-list">
                {
                    // 2. CAMBIO CLAVE: Usamos filteredContacts en lugar de contactsState
                    filteredContacts?.map((contact) => {
                        return (
                            <Link
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                className="contact-item"
                            >
                                <img
                                    src={contact.profile_picture}
                                    alt={contact.name}
                                    className="contact-avatar"
                                />

                                <div className="contact-info-text">
                                    <div className="contact-header-row">
                                        <h3>{contact.name}</h3>
                                        <span className="contact-date">{contact.last_time_connection}</span>
                                    </div>
                                    <p className="last-message-preview">
                                        {contact.status || "Sin estado"}
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
                
                {/* 3. OPCIONAL: Mensaje si no hay resultados */}
                {filteredContacts.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#667781', marginTop: '20px' }}>
                        No se encontraron contactos
                    </p>
                )}
            </div>
        </div>
    )
}