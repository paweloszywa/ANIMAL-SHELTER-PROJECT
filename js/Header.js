import React, {Component} from 'react';

import logo from "../images/pngfuel.com.png";
import {
    Link,
} from 'react-router-dom';

class Header extends Component{

    state = {
        open: false
    };

    handleOpenMenu = (e) => {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        })
    };

    handleCloseMenu = (e) => {
        e.preventDefault();
        this.setState({
            open: false
        })
    };

    render() {
        const {open} = this.state;
        const {shelterName} = this.props;
        let navClass = open? null : 'hide';

        return(
            <section className="nav">
                <header className="menu">
                    <div className='logo-back'><img className='nav-logo' src={logo} alt='logo'/></div>
                    <p className='shelter-name'>{shelterName}</p>
                    <a href="#" className="open-menu" onClick={this.handleOpenMenu} />
                    <nav className={navClass}>
                        <ul onClick={this.handleCloseMenu}>
                            <li><Link to='/'>Strona główna</Link></li>
                            <li><Link to='/adopt-all'>Nasi Podopieczni</Link></li>
                            <li><Link to='/advices'>Porady</Link></li>
                            <li><Link to='/about-us'>O nas</Link></li>
                            <li><Link to='/contact'>Kontakt</Link></li>
                        </ul>
                        <a href="#" className="close-menu" onClick={this.handleCloseMenu}>Zamknij</a>
                    </nav>
                </header>
            </section>
        )
    }
}

export default Header