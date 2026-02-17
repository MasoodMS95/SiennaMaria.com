import './NavBar.css'
import { useNavigate  } from 'react-router-dom';
export default function NavBar(){
    let history = useNavigate();
    return (
        <div className='nav-bar'>
            <ul>
                <li onClick={()=>{
                    console.log('clicked')
                    history.push('/')}
                    } 
                    className="home-nav-button nav-button">
                    <i id="home-image" className="fa-solid fa-house"></i>
                    <span>Home</span>
                </li>
                <li className="link-tree-nav-button nav-button">
                    <i className="fa-solid fa-house"></i>
                    <span>Links</span>
                </li>
                <li className="home-nav-button nav-button">
                    <i className="fa-solid fa-house"></i>
                    <span>Home</span>
                </li>
            </ul>
        </div>
    )
}