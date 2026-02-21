import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ContactsContext } from "../Context/ContactsContext.jsx";

export default function ContactSidebar() {
    // IMPORTANTE: Pedimos "contactsState" que es el nombre real en el Contexto
    const { contactsState, favorite_name } = useContext(ContactsContext)

    return (
    <div>
        <h2>Whatsapp Clone</h2>
        <h3>Me cae muy bien: {favorite_name}</h3>
        <div>
            {
                // Usamos el signo ? por seguridad y el nombre correcto
                contactsState?.map(
                    (contact) => {
                        return (
                            <Link 
                                to={`/contact/${contact.id}`}
                                key={contact.id}
                            >
                                <img 
                                    src={contact.profile_picture} 
                                    alt={contact.name} 
                                    style={{ width: '200px' }}
                                />
                                <h3>{contact.name}</h3>
                                <span>{contact.last_time_connection}</span>
                                <br />
                                <hr />
                            </Link>
                        )
                    }
                )
            }
        </div>
    </div>
    )
}