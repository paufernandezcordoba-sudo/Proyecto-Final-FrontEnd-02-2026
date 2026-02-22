import { createContext, useState } from "react";
import { getContacts } from "../../services/contactsService";

export const ContactsContext = createContext({
    contactsState: [],
    favorite_name: '',
    addMessage: () => {} // Agregamos como quien dice la firma de la función, para que quede claro que el Contexto provee esta función y así evitar errores de "undefined" al intentar usarla en otros componentes. La implementación real de la función se hace dentro del provider, pero aquí indicamos que existe y es una función vacía por defecto.
})

const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)

    const addMessage = (contactId, text) => {
        setContactsState((prevContacts) => {
            return prevContacts.map((contact) => {
                // Si el ID coincide (usamos == por si uno es string y otro number)
                if (contact.id == contactId) {
                    const newMessage = {
                        id: Date.now(), // Genera un ID único basado en la hora
                        text: text,
                        author: 'Yo',
                        send_by_me: true,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    };
                    // acá vuelve el contacto pero con el nuevo mensaje sumado a su lista
                    return { 
                        ...contact, 
                        messages: [...contact.messages, newMessage] 
                    };
                }
                return contact;
            });
        });
    };

    const provider_values = {
        contactsState,
        favorite_name: 'Siempre',
        addMessage //Esto permite que exportemos la función aquí
    }

    return (
        <ContactsContext.Provider value={provider_values}> 
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider;