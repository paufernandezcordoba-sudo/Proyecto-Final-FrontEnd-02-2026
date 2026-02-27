import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import { getContacts } from './services/contactsService'
import { ContactsContextProvider } from "./Components/Context/ContactsContext.jsx";
import ContactSidebar from './Components/ContactSidebar/ContactSidebar'
import './App.css'
import { useLocation } from 'react-router'


function App() {
    const location = useLocation();
    const isChatOpen = location.pathname.includes('/contact/');

    return (
        <ContactsContextProvider>

            <div className={`app-main-layout ${isChatOpen ? 'chat-is-open' : ''}`}>

                <aside className="sidebar-wrapper">
                    <ContactSidebar />
                </aside>

                <main className="content-wrapper">
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                        <Route path='/contact/:contact_id' element={<ContactScreen />} />
                    </Routes>
                </main>

            </div>
        </ContactsContextProvider>
    );
}

export default App