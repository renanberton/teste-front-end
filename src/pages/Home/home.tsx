import { Header } from '../../components/Header';
import '../../styles/home.css';

export function Home() {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Welcome to API blog</h2>
                <p>Use the menu to navigate the site and enjoy all its features.</p>
                <img className='blog-image' src="/imgs/blog-image.jpg" alt='Imagem para fechar os comentários' width={"400px"}  />
            </div>
        </div>

    )
}