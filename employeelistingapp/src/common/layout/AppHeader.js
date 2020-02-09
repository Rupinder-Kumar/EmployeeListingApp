import React from "react";

const AppHeader = (props) => {
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand">Welcome to Employee Management App! </span>                
                        <ul className="navbar-nav navbar-right">
                            <li className="nav-item"> 
                                    <button onClick={() => props.logout()} className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Logout</button>
                            </li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;