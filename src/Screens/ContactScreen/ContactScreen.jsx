import React, { useContext } from 'react'; // Asegurarme siempre tener useContext importado NOTA: Es un error común olvidar importar useContext cuando se va a usar el Contexto.
import { useParams } from 'react-router';
import { ContactsContext } from "../../Components/Context/ContactsContext.jsx";
import ContactSidebar from "../../Components/ContactSidebar/ContactSidebar.jsx";
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm.jsx';
import Messages from '../../Components/Messages/Messages.jsx';

export default function ContactScreen() {
  const { contactsState } = useContext(ContactsContext); // nombre exacto que define mi Contexto//

  //Obtengo el id del contacto seleccionado a traves de los parametros de la url
  const { contact_id } = useParams()

  //Busco el contacto seleccionado en la lista de contactos
  const contact_selected = contactsState?.find(contact => Number(contact.id) === Number(contact_id));

  return (
    <div>
      <ContactSidebar />
      {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
      {
        !contact_selected
          ? <div>
            <h1>El contacto seleccionado no existe</h1>
          </div>
          : <div>
            <h1>
              El contacto seleccionado es: {contact_selected.name}
            </h1>
            <Messages contact_selected={contact_selected} />
            <NewMessageForm contact_id={contact_id} />
          </div>
      }

    </div >
  )
}