import React from 'react'

export default function AuthLayout({ children }) {
    return (
        <>
            <link rel="stylesheet" href="assets/css/app.css"/>
            <div className="bg-info">
                <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                    {children}
                </div>
            </div>
            <script src="assets/js/app.js"></script>
        </>
    )
}
