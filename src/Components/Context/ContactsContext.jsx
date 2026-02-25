import { createContext, useState } from "react";
import { getContacts } from "../../services/contactsService";

export const ContactsContext = createContext({
    contactsState: [],
    addMessage: () => {}
});

const ContactsContextProvider = ({ children }) => {
    const [contactsState, setContactsState] = useState(getContacts());

    const addMessage = (contactId, text) => {
        setContactsState((prevContacts) => {
            return prevContacts.map((contact) => {
                if (contact.id == contactId) {
                    const newMessage = {
                        id: Date.now(),
                        text: text,
                        send_by_me: true,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    };
                    return { ...contact, messages: [...contact.messages, newMessage] };
                }
                return contact;
            });
        });
    };

    return (
        <ContactsContext.Provider value={{ contactsState, addMessage }}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsContextProvider;