import React from 'react';
import './NavBar.css'
import { useNavigate  } from 'react-router-dom';
import image from '../../assets/sienna_banner.png'

export default function NavBar(){

    let navigate = useNavigate();

    return (
        <React.Fragment>
            <img className='hero-banner' src={image}  alt='SiennaMaria.com'/>
            <ul className='nav-bar standard-font'>
                <li onClick={()=>navigate("/")}
                    className="home-nav-button nav-button">
                    <i id="home-image" className="fa-solid fa-house"></i>
                    <span>Home</span>
                </li>
                <li onClick={()=>navigate("/socials")}
                    className="link-tree-nav-button nav-button">
                    <i className="fa-solid fa-house"></i>
                    <span>Links</span>
                </li>
                <li className="home-nav-button nav-button last-item">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </li>
            </ul>
        </React.Fragment>
    )
}