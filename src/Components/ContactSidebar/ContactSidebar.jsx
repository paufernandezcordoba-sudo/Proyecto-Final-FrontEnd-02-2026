import React, { useContext, useState } from 'react' 
import { Link, useParams } from 'react-router-dom' // Usamos useParams para el gris
import { ContactsContext } from '../Context/ContactsContext'
import './ContactSidebar.css'
import { RiChatNewLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

export default function ContactSidebar() {
    const { contactsState } = useContext(ContactsContext) 
    const [searchQuery, setSearchQuery] = useState('');
    const { contact_id } = useParams(); // Esto detecta el chat actual

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
                {filteredContacts?.map((contact) => (
                    <Link
                        to={`/contact/${contact.id}`}
                        key={contact.id}
                        /* Agregamos la clase 'selected' si el ID coincide */
                        className={`contact-item ${contact_id == contact.id ? 'selected' : ''}`}
                    >
                        <img
                            src={contact.profile_picture}
                            alt={contact.name}
                            className="contact-avatar"
                        />
                        {/* ESTE DIV ES EL QUE MUESTRA EL TEXTO */}
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
                ))}
            </div>
        </div>
    )
}