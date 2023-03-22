import { Blog } from '../components/Blog/index';
import '../styles/home.css';

export function Home() {
    return (
        <div>
            <div>
                <h1>Blog - API</h1>
                <div>
                    <Blog />
                </div>
            </div>
        </div>

    )
}