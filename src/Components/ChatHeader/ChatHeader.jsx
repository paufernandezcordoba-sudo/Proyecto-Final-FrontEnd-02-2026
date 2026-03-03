import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import './ChatHeader.css';

export default function ChatHeader({ contact, onSearchClick, onInfoClick }) {
    if (!contact) return null;

return (
    <header className="chat-header">
        <div className="header-left">
            <Link to="/" className="back-btn">
                <IoArrowBack />
            </Link>
            <div className="header-click-area" onClick={onInfoClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <img src={contact.profile_picture} alt={contact.name} className="header-avatar" />
                <div className="header-info-text">
                    <span className="header-name">{contact.name}</span>
                    <span className="header-status">
                        {contact.last_time_connection}
                    </span>
                </div>
            </div>
        </div>
        <div className="header-right-actions">
            <button className="header-icon-btn" onClick={onSearchClick}>
                <IoSearchOutline />
            </button>
            <button className="header-icon-btn"><CiMenuKebab /></button>
        </div>
    </header>
);
}