import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import './ChatHeader.css';

export default function ChatHeader({ contact, onSearchClick, onInfoClick }) {
    // Si todavía no hay un contacto seleccionado, retornamos null para que no rompa
    if (!contact) return null;

return (
        <header className="chat-header">
            {/* Pruebo a ver cómo abre la info de contacto desde la foto y estado arriba en header */}
            <div className="header-left" onClick={onInfoClick} style={{ cursor: 'pointer' }}>
                <img src={contact.profile_picture} alt={contact.name} className="header-avatar" />
                <div className="header-info-text">
                    <span className="header-name">{contact.name}</span>
                    <span className="header-status">en línea</span>
                </div>
            </div>

            <div className="header-right-actions">
                {/* Buscar mensajes lupa*/}
                <button className="header-icon-btn" onClick={onSearchClick}>
                    <IoSearchOutline />
                </button>
                <button className="header-icon-btn"><CiMenuKebab /></button>
            </div>
        </header>
    );
}