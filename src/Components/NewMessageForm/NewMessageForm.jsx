import React, { useState, useContext } from 'react';
import { ContactsContext } from '../Context/ContactsContext.jsx';

    /*logica para capturar mensajes y agregarlo al contacto seleccionado*/
    /*El textarea es un input de varias lineas, se le asigna un id para relacionarlo con el label y un name para identificarlo al momento de capturar su valor*/
    /*Le agregamos una función handleSubmit al form para capturar el evento de submit y evitar que se recargue la página, luego capturamos el valor del textarea a través de su name y lo mostramos por consola*/
    /* Luego, para agregar el mensaje al contacto seleccionado, necesitamos acceder al Contexto de contactos para actualizar el estado global con el nuevo mensaje. Para esto, importamos useContext y ContactsContext, y luego usamos la función de actualización del estado que nos proporciona el Contexto para agregar el nuevo mensaje al contacto seleccionado*/

export default function NewMessageForm({ contact_id }) {
    const [text, setText] = useState('');
    const { addMessage } = useContext(ContactsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Obtenemos el valor directamente del evento usando el 'name' del textarea, aunque también podríamos usar el estado 'text' que ya tenemos para esto. De hecho, en este caso es más directo usar el estado, pero aquí se muestra cómo capturar el valor directamente del formulario usando FormData, lo cual es útil para formularios más complejos con múltiples campos.
        const formData = new FormData(e.target);
        const mensaje = formData.get('mensaje_texto');

        if (mensaje.trim() !== '') {
            addMessage(contact_id, mensaje);
            setText(''); // Limpiamos el estado
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
            <label htmlFor="mensaje_texto">Escribe tu mensaje:</label>
            <textarea 
                id="mensaje_texto"
                name="mensaje_texto" // Identificador para capturar el valor
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Escribe un mensaje aquí..." 
                style={{ width: '100%', display: 'block', marginBottom: '10px' }}
            />
            <button type="submit">Enviar Mensaje</button>
        </form>
    );
}