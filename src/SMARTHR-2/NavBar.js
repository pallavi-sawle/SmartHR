import React, { useState } from 'react';

const NavBar = () => {
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
                <a className="navbar-brand text-white" href="#">Dreams Technologies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav mr-auto">
                        <div id='navbarpill'>
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
                        <div className="dropdown">
                            <h6 className="dropdown-toggle marginnotification" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-flag fa-1x m-1 mt-3"></i>
                                English
                            </h6>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Hindi</button></li>
                                <li><button className="dropdown-item" type="button">Kannada</button></li>
                            </ul>
                        </div>
                        <div><i className="fa fa-bell fa-1x mt-3 marginnotification"><sup id="circle"></sup></i></div>
                        <div><i className="fa fa-comment fa-1x mt-3 marginnotification"></i></div>

                        <div className="dropdown mt-2">
                            <h6 className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://images.unsplash.com/photo-1489673446964-e1f989187ddc?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="rounded-circle" width="30" height="30" />
                                Admin
                            </h6>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Users</a></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;