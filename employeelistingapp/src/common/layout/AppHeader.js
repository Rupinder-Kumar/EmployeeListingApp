import React from "react";

const AppHeader = (props) => {
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand">Welcome to Employee Management App! </span>
                    <button onClick={() => props.logout()} className="btn btn-outline-default my-2 my-sm-0" type="submit">Logout</button>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;