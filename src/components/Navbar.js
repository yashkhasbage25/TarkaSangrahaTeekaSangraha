"use client";  

import Link from 'next/link';  
import { useState } from 'react';  
  
const Navbar = ({ onToggleNyayabodhini, onToggleDeepika, onTogglePadakrytam }) => {  
  const [nyayabodhiniChecked, setNyayabodhiniChecked] = useState(true);  
  const [deepikaChecked, setDeepikaChecked] = useState(true);  
  const [padakrytamChecked, setPadakrytamChecked] = useState(true);  
  
  const handleNyayabodhiniChange = () => {  
    const newCheckedState = !nyayabodhiniChecked;  
    setNyayabodhiniChecked(newCheckedState);  
    onToggleNyayabodhini(newCheckedState);  
  };  
  
  const handleDeepikaChange = () => {  
    const newCheckedState = !deepikaChecked;  
    setDeepikaChecked(newCheckedState);  
    onToggleDeepika(newCheckedState);  
  };  
  
  const handlePadakrytamChange = () => {  
    const newCheckedState = !padakrytamChecked;  
    setPadakrytamChecked(newCheckedState);  
    onTogglePadakrytam(newCheckedState);  
  };  
  
  return (  
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">  
      <Link href="/" className="navbar-brand">  
        तर्कसङ्ग्रहटीकासङ्ग्रहः  
      </Link>  
      <button  
        className="navbar-toggler"  
        type="button"  
        data-toggle="collapse"  
        data-target="#navbarNav"  
        aria-controls="navbarNav"  
        aria-expanded="false"  
        aria-label="Toggle navigation"  
      >  
        <span className="navbar-toggler-icon"></span>  
      </button>  
      <div className="collapse navbar-collapse" id="navbarNav">  
        <ul className="navbar-nav ml-auto">  
          <li className="nav-item dropdown">  
            <a  
              className="nav-link dropdown-toggle"  
              href="#"  
              id="pratyaksha-nav-dropdown"  
              role="button"  
              data-toggle="dropdown"  
              aria-haspopup="true"  
              aria-expanded="false"  
            >  
              प्रत्यक्षपरिच्छेदः  
            </a>  
            <div className="dropdown-menu" aria-labelledby="pratyaksha-nav-dropdown">  
              <Link href="/pratyaksha" className="dropdown-item">मङ्गलम्</Link>  
              <Link href="/pratyaksha#section-मङ्गलवादः" className="dropdown-item">मङ्गलवादः</Link>  
              <Link href="/pratyaksha#section-सप्तपदार्थाः" className="dropdown-item">सप्तपदार्थाः</Link>  
              <Link href="/pratyaksha#section-द्रव्याणि" className="dropdown-item">द्रव्याणि</Link>  
              <Link href="/pratyaksha#section-गुणाः" className="dropdown-item">गुणाः</Link>  
            </div>  
          </li>  
          <li className="nav-item dropdown">  
            <a  
              className="nav-link dropdown-toggle"  
              href="#"  
              id="anumana-nav-dropdown"  
              role="button"  
              data-toggle="dropdown"  
              aria-haspopup="true"  
              aria-expanded="false"  
            >  
              अनुमानपरिच्छेदः  
            </a>  
            <div className="dropdown-menu" aria-labelledby="anumana-nav-dropdown">  
              <Link href="/anumana" className="dropdown-item">मुखम्</Link>  
              <Link href="/anumana#section-Option1" className="dropdown-item">Option 1</Link>  
              <Link href="/anumana#section-Option2" className="dropdown-item">Option 2</Link>  
              <Link href="/anumana#section-Option3" className="dropdown-item">Option 3</Link>  
            </div>  
          </li>  
          <li className="nav-item dropdown">  
            <a  
              className="nav-link dropdown-toggle"  
              href="#"  
              id="upamana-nav-dropdown"  
              role="button"  
              data-toggle="dropdown"  
              aria-haspopup="true"  
              aria-expanded="false"  
            >  
              उपमानपरिच्छेदः  
            </a>  
            <div className="dropdown-menu" aria-labelledby="upamana-nav-dropdown">  
              <Link href="/upamana" className="dropdown-item">मुखम्</Link>  
              <Link href="/upamana#section-Option1" className="dropdown-item">Option 1</Link>  
              <Link href="/upamana#section-Option2" className="dropdown-item">Option 2</Link>  
              <Link href="/upamana#section-Option3" className="dropdown-item">Option 3</Link>  
            </div>  
          </li>  
          <li className="nav-item dropdown">  
            <a  
              className="nav-link dropdown-toggle"  
              href="#"  
              id="shabda-nav-dropdown"  
              role="button"  
              data-toggle="dropdown"  
              aria-haspopup="true"  
              aria-expanded="false"  
            >  
              शब्दपरिच्छेदः  
            </a>  
            <div className="dropdown-menu" aria-labelledby="shabda-nav-dropdown">  
              <Link href="/shabda" className="dropdown-item">मुखम्</Link>  
              <Link href="/shabda#section-Option1" className="dropdown-item">Option 1</Link>  
              <Link href="/shabda#section-Option2" className="dropdown-item">Option 2</Link>  
              <Link href="/shabda#section-Option3" className="dropdown-item">Option 3</Link>  
            </div>  
          </li>  
          <li className="nav-item dropdown">  
            <a  
              className="nav-link dropdown-toggle"  
              href="#"  
              id="teeka-nav-dropdown"  
              role="button"  
              data-toggle="dropdown"  
              aria-haspopup="true"  
              aria-expanded="false"  
            >  
              टीकाचयनम्  
            </a>  
            <div className="dropdown-menu" aria-labelledby="teeka-nav-dropdown">  
              <div className="dropdown-item">  
                <input  
                  className="form-check-input"  
                  type="checkbox"  
                  id="padakrtyam-checkbox"  
                  checked={padakrytamChecked}  
                  onChange={handlePadakrytamChange}  
                />  
                <label className="form-check-label" htmlFor="padakrtyam-checkbox">पदकृत्यम्</label>  
              </div>  
              <div className="dropdown-item">  
                <input  
                  className="form-check-input"  
                  type="checkbox"  
                  id="nyayabodhini-checkbox"  
                  checked={nyayabodhiniChecked}  
                  onChange={handleNyayabodhiniChange}  
                />  
                <label className="form-check-label" htmlFor="nyayabodhini-checkbox">न्यायबोधिनी</label>  
              </div>  
              <div className="dropdown-item">  
                <input  
                  className="form-check-input"  
                  type="checkbox"  
                  id="deepika-checkbox"  
                  checked={deepikaChecked}  
                  onChange={handleDeepikaChange}  
                />  
                <label className="form-check-label" htmlFor="deepika-checkbox">दीपिका</label>  
              </div>  
            </div>  
          </li>  
        </ul>  
      </div>  
    </nav>  
  );  
};  
  
export default Navbar;  