import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Consumer } from '../Context';
import '../../App.css'



const Navbar = () => {
    return (
        <React.Fragment>
            <Consumer>
                {(value) => {
                    console.log(value)
                    const handleChangeMenu = value.handleChangeMenu;
                    const MenuToggle = value.MenuToggle;
                    return (
                        <div className="navbar_overall">
                            <div className="container">
                                <div className="logo">
                                    <Link to="/"> <img src={logo} alt="logo"></img></Link>
                                </div>
                                <div className={`${MenuToggle ? "nav-link" : "showpanel"}`}>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/rooms">Rooms</Link></li>

                                    </ul>
                                </div>
                                <div className="cart_list">
                                    <div className="shop_list">
                                        <ul>
                                            <button onClick={() => { handleChangeMenu() }}><i className="fa fa-bars"></i></button>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }}
            </Consumer>
        </React.Fragment>


    )
}

export default Navbar;