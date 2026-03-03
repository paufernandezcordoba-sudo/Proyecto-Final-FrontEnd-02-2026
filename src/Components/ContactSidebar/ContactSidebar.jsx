import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContactsContext } from '../Context/ContactsContext'
import './ContactSidebar.css'
import { RiChatNewLine } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

export default function ContactSidebar() {
    const { contactsState } = useContext(ContactsContext)
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('Todos');
    const { contact_id } = useParams();

    const filteredContacts = contactsState.filter(contact => {
        const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase());

        if (activeFilter === 'No leídos') {
            return matchesSearch && contact.isUnread;
        }
        if (activeFilter === 'Favoritos') {
            return matchesSearch && contact.isFavorite;
        }

        return matchesSearch;
    });

    return (
        <div className="sidebar-content">
            <header className="sidebar-header">
                <div className="header-top-row">
                    <h1 className="whatsapp-title">WhatsApp</h1>
                    <div className="header-icons">
                        <button className="sidebar-icon-btn" title="Nuevo chat">
                            <RiChatNewLine />
                        </button>
                        <button className="sidebar-icon-btn" title="Menú">
                            <CiMenuKebab />
                        </button>
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
                    {['Todos', 'No leídos', 'Favoritos'].map((filter) => (
                        <button
                            key={filter}
                            className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </header>

            <div className="contacts-list">
                {filteredContacts?.map((contact) => (
                    <Link
                        to={`/contact/${contact.id}`}
                        key={contact.id}

                        className={`contact-item ${contact_id == contact.id ? 'selected' : ''}`}
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
                ))}
            </div>
        </div>
    )
}