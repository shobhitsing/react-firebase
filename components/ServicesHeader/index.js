import React from 'react';

const ServicesHeader = () => {
    return (
        <div>
             <header className="main-header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand brand-logo" href="#"><img src="images/logo.svg" className="img-fluid" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNav">
                            <ul className="navbar-nav ml-auto custom-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Overview <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Relationships</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Gap Assessment</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Life Plan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Action plan</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Schedule</a>
                                </li>
                            </ul>
                        </div>
                        <div className="user-profile">
                            <img src="images/user.jpg" className="img-fluid" alt="" />
                            <span className="user-list-drop"><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default ServicesHeader;
