import React from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}
