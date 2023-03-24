import './style.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div>
            <header>
                <h1>Blog - API</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Blog">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/Users">Users</Link>
                    </li>
                </ul>
            </header>
        </div>

    )
}