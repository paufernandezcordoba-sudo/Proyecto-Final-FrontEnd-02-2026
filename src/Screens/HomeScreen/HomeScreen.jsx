import React from 'react'
import { Link } from 'react-router'
import './HomeScreen.css'

export default function HomeScreen() {
  return (
    <div className="home-container">
        <div className="welcome-content">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" 
                alt="WhatsApp Logo" 
                className="welcome-img"
            />
            <h1>Descarga WhatsApp para Windows</h1>
            <p>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</p>
            <Link to="https://www.whatsapp.com/download" target="_blank">
            <button className="download-btn">Descargar</button>
            </Link>
        </div>
    </div>
  )
}