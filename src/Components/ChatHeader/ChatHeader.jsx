import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import './ChatHeader.css';

export default function ChatHeader({ contact }) {
    // Si todavía no hay un contacto seleccionado, retornamos null para que no rompa
    if (!contact) return null;

    return (
        <header className="chat-header">
            <div className="header-left">
                <Link to="/" className="back-button-mobile">
                    <IoArrowBack />
                </Link>
                <img 
                    src={contact.profile_picture} 
                    alt={contact.name} 
                    className="header-avatar" 
                />
                <div className="header-info-text">
                    <span className="header-name">{contact.name}</span>
                    <span className="header-status">en línea</span>
                </div>
            </div>

            <div className="header-right-actions">
                <button className="header-icon-btn" title="Buscar">
                    <IoSearchOutline />
                </button>
                <button className="header-icon-btn" title="Menú">
                    <CiMenuKebab />
                </button>
            </div>
        </header>
    );
}