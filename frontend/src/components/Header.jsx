import React from "react";
import './Header.css'

const Header = () => {
    return(
        <div className="header-container" >
            <div className="header-logo">
                Logo
            </div>

            <nav className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Comprar</li>
                    <li>Sugestões</li>
                    <li>Serviços</li>
                </ul>
            </nav>

            <div className="login">
                <a href="/admin" style={{
                    textDecoration: 'none',
                    color: '#fff'
                }}>Admin</a>
            </div>
        </div>
    )
}

export default Header