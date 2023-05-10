import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import SearchWidget from '../SearchWidget/SearchWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                
                <Link to='/'><h1>BOOKWORMS</h1></Link>
                <nav className="navbar">
                    <Link to='/productos/fisico' className="navbar__link">Libros Físicos</Link>
                    <Link to='/productos/e-book' className="navbar__link">E-Books</Link>
                </nav>
                <SearchWidget />
                <CartWidget />
            </div>
        </header>
    )
}