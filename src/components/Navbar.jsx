import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav style={{background: 'lightgray', color: 'darkblue'}}>
            <Link to='/' style={{marginRight: '1rem'}}>Home</Link>
            <Link to='/about' style={{marginRight: '1rem'}}>Über</Link>
            <Link to='/impressum'>Impressum</Link>
        </nav>
    );
}