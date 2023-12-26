import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
              News-Sphere
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/"
                                        id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">AE: United Arab Emirates</Link></li>
                                        <li><Link className="dropdown-item" to="/">AR: Argentina</Link></li>
                                        <li><Link className="dropdown-item" to="/">AT: Austria</Link></li>
                                        <li><Link className="dropdown-item" to="/"> BE: Belgium</Link></li>
                                        <li><Link className="dropdown-item" to="/">BG: Bulgaria</Link></li>
                                        <li><Link className="dropdown-item" to="/">BR: Brazil</Link></li>
                                        <li><Link className="dropdown-item" to="/">CA: Canada</Link></li>
                                        <li><Link className="dropdown-item" to="/">CH: Switzerland</Link></li>
                                        <li><Link className="dropdown-item" to="/">CN: China</Link></li>
                                        <li><Link className="dropdown-item" to="/">CO: Colombia</Link></li>
                                        <li><Link className="dropdown-item" to="/">CU: Cuba</Link></li>
                                        <li><Link className="dropdown-item" to="/">CZ: Czech Republic</Link></li>
                                        <li><Link className="dropdown-item" to="/">DE: Germany</Link></li>
                                        <li><Link className="dropdown-item" to="/">EG: Egypt</Link></li>
                                        <li><Link className="dropdown-item" to="/">FR: France</Link></li>
                                        <li><Link className="dropdown-item" to="/">GB: United Kingdom</Link></li>
                                        <li><Link className="dropdown-item" to="/">GR: Greece</Link></li>
                                        <li><Link className="dropdown-item" to="/">HK: Hong Kong</Link></li>
                                        <li><Link className="dropdown-item" to="/">HU: Hungary</Link></li>
                                        <li><Link className="dropdown-item" to="/">ID: Indonesia</Link></li>
                                        <li><Link className="dropdown-item" to="/">IE: Ireland</Link></li>
                                        <li><Link className="dropdown-item" to="/">IL: Israel</Link></li>
                                        <li><Link className="dropdown-item" to="/">IN: India</Link></li>
                                        <li><Link className="dropdown-item" to="/">IT: Italy</Link></li>
                                        <li><Link className="dropdown-item" to="/">JP: Japan</Link></li>
                                        <li><Link className="dropdown-item" to="/">KR: South Korea</Link></li>
                                        <li><Link className="dropdown-item" to="/">LT: Lithuania</Link></li>
                                        <li><Link className="dropdown-item" to="/">LV: Latvia</Link></li>
                                        <li><Link className="dropdown-item" to="/">MA: Morocco</Link></li>
                                        <li><Link className="dropdown-item" to="/">MX: Mexico</Link></li>
                                        <li><Link className="dropdown-item" to="/">MY: Malaysia</Link></li>
                                        <li><Link className="dropdown-item" to="/">NG: Nigeria</Link></li>
                                        <li><Link className="dropdown-item" to="/">NL: Netherlands</Link></li>
                                        <li><Link className="dropdown-item" to="/">NO: Norway</Link></li>
                                        <li><Link className="dropdown-item" to="/">NZ: New Zealand</Link></li>
                                        <li><Link className="dropdown-item" to="/">PH: Philippines</Link></li>
                                        <li><Link className="dropdown-item" to="/">PL: Poland</Link></li>
                                        <li><Link className="dropdown-item" to="/">PT: Portugal</Link></li>
                                        <li><Link className="dropdown-item" to="/">RO: Romania</Link></li>
                                        <li><Link className="dropdown-item" to="/">RS: Serbia</Link></li>
                                        <li><Link className="dropdown-item" to="/">RU: Russia</Link></li>
                                        <li><Link className="dropdown-item" to="/">SA: Saudi Arabia</Link></li>
                                        <li><Link className="dropdown-item" to="/">SE: Sweden</Link></li>
                                        <li><Link className="dropdown-item" to="/">SG: Singapore</Link></li>
                                        <li><Link className="dropdown-item" to="/">SI: Slovenia</Link></li>
                                        <li><Link className="dropdown-item" to="/">SK: Slovakia</Link></li>
                                        <li><Link className="dropdown-item" to="/">TH: Thailand</Link></li>
                                        <li><Link className="dropdown-item" to="/">TR: Turkey</Link></li>
                                        <li><Link className="dropdown-item" to="/">TW: Taiwan</Link></li>
                                        <li><Link className="dropdown-item" to="/">UA: Ukraine</Link></li>
                                        <li><Link className="dropdown-item" to="/">US: United States</Link></li>
                                        <li><Link className="dropdown-item" to="/">VE: Venezuela</Link></li><li><Link className="dropdown-item" to="/">ZA: South Africa</Link></li></ul>    
                                </li> */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
