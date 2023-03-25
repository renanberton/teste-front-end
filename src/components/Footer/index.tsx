import './style.css';

export function Footer() {
    return (
      <footer>
         <h3>Talk to us! blog@blog.com.br</h3>
         <button>CONTACT US</button>
         <div className="social-icons">
            <img className='social-icon' src="/imgs/facebook-icon.png" alt='Icone de redirecionamento para a página do Facebook.' />
            <img className='social-icon' src="/imgs/twitter-icon.png" alt='Icone de redirecionamento para a página do Twitter.'/>
            <img className='social-icon' src="/imgs/whatsapp-icon.png" alt='Icone de redirecionamento para a página do Whatsapp.'/>
         </div>
      </footer>
    )
}