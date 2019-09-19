import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                     <div id="title" className="container">
                        <h2 className="is-size-3">Heading 1</h2>
                        <p className="subtitle">Heading 2</p>
                    </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

                        <div className="navbar-item">
                            <div className="dropdown">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Select ThingA</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu"></div>
                            </div>
                          </div>

                          <div id="dropdown_module" className="navbar-item">
                            <div className="dropdown">
                                <div className="dropdown-trigger">
                                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                        <span>Select ThingB</span>
                                        <span className="icon is-small">
                                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                    </button>
                                </div>
                                <div className="dropdown-menu" id="dropdown-menu" role="menu"></div>
                            </div>
                          </div>

                          <div id="fromDate" className="navbar-item">
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">From:</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="date" value="2019-01-01" readOnly/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                          </div>

                          <div className="navbar-item">
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">To:</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="date" value="2019-12-31" readOnly/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                          </div>

                    </div>

                    <div className="navbar-end">
                      <div className="navbar-item">
                        <div className="buttons">
                          <a className="button is-light">Log out</a>
                        </div>
                      </div>
                    </div>
                  </div>
            </nav>
        </div>
    );
};

export { Header };
