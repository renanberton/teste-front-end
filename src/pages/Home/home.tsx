import { Header } from '../../components/Header';
import '../../styles/home.css';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Welcome to API blog</h2>
                <p>Use the menu to navigate the site and enjoy all its features.</p>
            </div>
        </div>

    )
}