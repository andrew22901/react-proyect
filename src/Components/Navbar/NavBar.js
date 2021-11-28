import React from "react";


class Navbar extends React.Component {
    render() {
        return(
            <nav className="menu">
            <label className="logo">Castec 4.1</label>
            <ul className="menu_items">
                <li className="active"><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Desarrollos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        )
    }
}

export default Navbar