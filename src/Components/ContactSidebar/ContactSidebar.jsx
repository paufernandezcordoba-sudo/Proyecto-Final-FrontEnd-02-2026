import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from '../Context/ContactsContext'
import './ContactSidebar.css'

export default function ContactSidebar() {
    const { contactsState, favorite_name } = useContext(ContactsContext)

    return (
        <div className="sidebar-content">
            {/* Cabecera del Sidebar estilo WhatsApp */}
            <header className="sidebar-header">
                <div className="user-profile">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQG-I4ZDlhvqrw/profile-displayphoto-crop_800_800/B4DZwf_6TOJQAI-/0/1770063377562?e=1773273600&v=beta&t=fYPJKiG1Q7xVF9flxJAoW7x48baUl73k7d0Sdnt8q5E" alt="Yo" className="contact-avatar" />
                    <div className="user-profile-info">
                        <h2>Pau</h2>
                        <p className="favorite-text">Ganan los que se atreven{favorite_name}</p>
                    </div>
                </div>

            </header>

            <div className="contacts-list">
                {
                    contactsState?.map((contact) => {
                        return (
                            <Link
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                                className="contact-item" // Aplicamos la clase del contenedor
                            >
                                <img
                                    src={contact.profile_picture}
                                    alt={contact.name}
                                    className="contact-avatar" // Aplicamos la clase de la foto circular
                                />

                                <div className="contact-info-text">
                                    <div className="contact-header-row">
                                        <h3>{contact.name}</h3>
                                        <span className="contact-date">{contact.last_time_connection}</span>
                                    </div>
                                    <p className="last-message-preview">
                                        {/* Aquí iría el último mensaje o DESCRIPCION ACTIVIDAD */}
                                        {contact.status || "Sin estado"}
                                    </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}