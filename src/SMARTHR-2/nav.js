import React, { useState } from 'react';

const Nav = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching for: ${searchQuery}`);
    }

    return (
        <nav className="navbar navbar-expand-lg text-white">
            <div className="container-fluid" id="gradient">
                <i className='fa fa-bars m-1 fa-1x'></i>
                <a className="navbar-brand" href="#">Dreams Technologies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mt-1">
                            <div id='navbarpill' className='nav-link active'>
                                <form onSubmit={handleSearchSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Search here.."
                                        id="Searchherecolor"
                                        value={searchQuery}
                                        onChange={handleSearchInputChange} />
                                    <button type="submit" id="searchradius1"><i className='fa fa-search'></i></button>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-flag fa-1x m-1 mt-3"></i>
                                English
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#"><button className="dropdown-item" type="button">Hindi</button></a></li>
                                <li><a className="dropdown-item" href="#"><button className="dropdown-item" type="button">Kannada</button></a></li>
                            </ul>
                        </li>
                        <li className="nav-item mt-3 d-flex text-dark">
                            <div><i className="fa fa-bell fa-1x marginnotification"></i></div>
                            <div> <i className="fa fa-comment fa-1x marginnotification"></i></div>
                        </li>

                        <li className="nav-item dropdown mt-2">
                            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">                                <img src="https://images.unsplash.com/photo-1489673446964-e1f989187ddc?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="rounded-circle" width="30" height="30" />
                                Admin
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Users</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;