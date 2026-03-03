import React, { createContext, useState } from "react";
import { getContacts } from "../../services/contactsService";

export const ContactsContext = createContext();

export const ContactsContextProvider = ({ children }) => {
    const [contactsState, setContactsState] = useState(getContacts());

    const addMessage = (contactId, text) => {
        setContactsState((prevContacts) =>
            prevContacts.map((contact) => {
                if (contact.id == contactId) {
                    const newMessage = {
                        id: Date.now(),
                        text: text,
                        send_by_me: true,
                        status: 'sent',
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    };
                    return {
                        ...contact,
                        messages: [...(contact.messages || []), newMessage]
                    };
                }
                return contact;
            })
        );
    };

    const value = { contactsState, addMessage };

    return (
        <ContactsContext.Provider value={value}>
            {children}
        </ContactsContext.Provider>
    );
};
