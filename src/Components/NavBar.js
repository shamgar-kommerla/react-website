import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

const NavBar = (props) => {
    
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },3000);

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a href="/" className="brand-logo">Poke'Times </a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}


export default withRouter(NavBar);
//WithRouter will wrap navbar into itself and export it as a Route.